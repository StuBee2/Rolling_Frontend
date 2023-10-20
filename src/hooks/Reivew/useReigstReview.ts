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
      position: "",
      schoolLife: "",
      preparationCourse: "",
      employmentProcess: "",
      interviewQuestion: "",
      mostImportantThing: "",
      welfare: "",
      meal: "",
      commuteTime: "",
      advantages: "",
      disAdvantages: "",
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
      const { ...attr } = reviewContents;
      const {
        salaryAndBenefits,
        workLifeBalance,
        organizationalCulture,
        careerAdvancement,
      } = reviewStarGrade;

      if (!POSITION_ITEMS.some((item) => item === attr.position)) {
        return rollingToast("입력하신 포지션이 없습니다!", "warning");
      }

      if (attr.schoolLife.trim() === "") {
        return rollingToast("학교생활을 작성해주세요!", "warning");
      }

      if (attr.preparationCourse.trim() === "") {
        return rollingToast("취업 준비 과정을 작성해주세요!", "warning");
      }

      if (attr.employmentProcess.trim() === "") {
        return rollingToast("채용 프로세스을 작성해주세요!", "warning");
      }

      if (attr.interviewQuestion.trim() === "") {
        return rollingToast("면접 질문을 작성해주세요!", "warning");
      }

      if (attr.mostImportantThing.trim() === "") {
        return rollingToast(
          "자신이 생각하는 가장 중요한 점을 작성해주세요!",
          "warning"
        );
      }

      if (attr.welfare.trim() === "") {
        return rollingToast("사내 복지를 작성해주세요!", "warning");
      }

      if (attr.meal.trim() === "") {
        return rollingToast("식사 제공 여부를 작성해주세요!", "warning");
      }

      if (attr.commuteTime.trim() === "") {
        return rollingToast("출퇴근 시간을 작성해주세요!", "warning");
      }

      if (attr.advantages.trim() === "") {
        return rollingToast("회사 장점을 작성해주세요!", "warning");
      }

      if (attr.disAdvantages.trim() === "") {
        return rollingToast("회사 단점을 작성해주세요!", "warning");
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

      console.log(param);
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
