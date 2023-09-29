import { ReviewCompanyContentsType } from "@src/types/Review/review.type";
import { usePostReviewMutation } from "@src/queries/Review/review.query";
import { useState } from "react";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { ReviewParam } from "@src/repositories/Review/review.repository";
import axios from "axios";
import { reviewErrorHanlder } from "@src/utils/Error/Review/reviewErrorHanlder";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { CompanyReviewRegisterModalAtom } from "@src/stores/company/company.store";
import { useSetRecoilState } from "recoil";
import { POSITION_ITEMS } from "@src/constants/Position/position.constant";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useRegistReview = (companyId: string) => {
  const postReview = usePostReviewMutation();
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const setIsCompanyReviewRegisterModal = useSetRecoilState(
    CompanyReviewRegisterModalAtom
  );

  const [reviewContents, setReviewContents] =
    useState<ReviewCompanyContentsType>({
      content: "",
      position: "",
      careerPath: "",
    });
  const [reviewStarRating, setReviewStarRating] = useState<
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
    setReviewStarRating((prev) => ({ ...prev, [name]: grade }));
  };

  const handleCompanyReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("리뷰를 등록하시겠습니까?");
    if (answer) {
      const { content, position, careerPath } = reviewContents;

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

      const param = {
        companyId,
        ...reviewContents,
        ...reviewStarRating,
      };

      postReview.mutate(param as unknown as ReviewParam, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.review.getMyReview,
            QUERY_KEYS.review.getReviewListCompanyId(companyId),
            QUERY_KEYS.review.getReviewMyStatus,
          ]);
          setIsCompanyReviewRegisterModal(false);
          rollingToast("리뷰를 등록하였습니다.", "success");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data;
            rollingToast(reviewErrorHanlder(status, message), "error");
          }
        },
      });
    }
  };

  return {
    setReviewContents,
    reviewContents,
    reviewStarRating,
    handleCompanyReviewChange,
    handleStarGradeChange,
    handleCompanyReviewSubmit,
  };
};
