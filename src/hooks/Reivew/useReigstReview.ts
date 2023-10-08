import { ReviewCompanyContentsType } from "@src/types/Review/review.type";
import { usePostReviewMutation } from "@src/queries/Review/review.query";
import { useState } from "react";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { ReviewParam } from "@src/repositories/Review/review.repository";
import axios, { AxiosError } from "axios";
import { reviewErrorHanlder } from "@src/utils/Error/Review/reviewErrorHanlder";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { CompanyReviewRegistModalAtom } from "@src/stores/company/company.store";
import { useSetRecoilState } from "recoil";
import { POSITION_ITEMS } from "@src/constants/Position/position.constant";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

export const useRegistReview = (companyId: string) => {
  const postReview = usePostReviewMutation();
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const setIsCompanyReviewRegisterModal = useSetRecoilState(
    CompanyReviewRegistModalAtom
  );

  const [reviewContents, setReviewContents] =
    useState<ReviewCompanyContentsType>({
      content: "",
      position: "",
      careerPath: "",
    });
  const [reviewStarGrade, setReviewStarGrade] = useState<
    Record<string, number>
  >({
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });

  const handleCompanyReviewChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setReviewContents((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarGradeChange = (name: string, grade: number) => {
    setReviewStarGrade((prev) => ({ ...prev, [name]: grade }));
  };

  const handleCompanyReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("리뷰를 등록하시겠습니까?");
    if (answer) {
      const { content, position, careerPath } = reviewContents;
      const {
        salaryAndBenefits,
        workLifeBalance,
        organizationalCulture,
        careerAdvancement,
      } = reviewStarGrade;

      // 포지션, 입사경로, 회사리뷰내용 공백 검증
      if (position === "") {
        return rollingToast("포지션을 작성해주세요!", "warning");
      }

      if (!POSITION_ITEMS.some((item) => item === position)) {
        return rollingToast("입력하신 포지션이 없습니다!", "warning");
      }
      if (careerPath === "") {
        return rollingToast("입사경로를 작성해주세요!", "warning");
      }

      if (content === "") {
        return rollingToast("리뷰내용을 작성해주세요!", "warning");
      }

      // 만족도 별점 0점 검증
      if (workLifeBalance === 0) {
        return rollingToast("워라벨 만족도 별점을 매겨주세요!", "warning");
      }

      if (salaryAndBenefits === 0) {
        return rollingToast("연봉 만족도 별점을 매겨주세요!", "warning");
      }

      if (careerAdvancement === 0) {
        return rollingToast("커리어 향상 만족도 별점을 매겨주세요!", "warning");
      }

      if (organizationalCulture === 0) {
        return rollingToast("조직문화 만족도 별점을 매겨주세요!", "warning");
      }

      const param = {
        companyId,
        ...reviewContents,
        ...reviewStarGrade,
      };

      postReview.mutate(param as unknown as ReviewParam, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.review.getMyReview,
            QUERY_KEYS.review.getReviewListCompanyId(companyId),
            QUERY_KEYS.review.getReviewMyStatus,
          ]);
          turnOffModal(setIsCompanyReviewRegisterModal);
          rollingToast("리뷰를 등록하였습니다.", "success");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data as AxiosError;
            rollingToast(reviewErrorHanlder(Number(status), message), "error");
          }
        },
      });
    }
  };

  return {
    setReviewContents,
    reviewContents,
    reviewStarGrade,
    handleCompanyReviewChange,
    handleStarGradeChange,
    handleCompanyReviewSubmit,
  };
};
