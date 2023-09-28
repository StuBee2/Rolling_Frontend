import { QUERY_KEYS } from "@src/queries/queryKey";
import { useDeleteMyReviewMutation } from "@src/queries/Review/review.query";
import { reviewErrorHanlder } from "@src/utils/Error/Review/reviewErrorHanlder";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import axios from "axios";
import { useState } from "react";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useSetUpReview = () => {
  const [isClickDots, setIsClickDots] = useState(false);
  const { queryInvalidates } = useQueryInvalidates();
  const deleteMyReview = useDeleteMyReviewMutation();
  const { rollingToast } = useRollingToast();

  const hanldeReviewSetUpClick = (
    id: number,
    reviewId: string,
    companyId: string
  ) => {
    switch (id) {
      case 0:
        return;
      case 1:
        return hanldeDeleteMyReview(reviewId, companyId);
      case 2:
        return setIsClickDots(false);
      default:
        break;
    }
  };

  const hanldeDeleteMyReview = (reviewId: string, companyId: string) => {
    const answer = window.confirm("리뷰한 회사를 삭제하시겠습니까?");
    if (answer) {
      deleteMyReview.mutate(reviewId, {
        onSuccess: () => {
          queryInvalidates([
            {
              queryKey: QUERY_KEYS.review.getReviewListCompanyId(companyId),
              refetchInactive: true,
            },
            {
              queryKey: QUERY_KEYS.review.getMyReview,
              refetchInactive: true,
            },
            {
              queryKey: QUERY_KEYS.review.getReviewMyStatus,
              refetchInactive: true,
            },
          ]);
          rollingToast("리뷰를 삭제하였습니다.", "success");
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

  return { isClickDots, setIsClickDots, hanldeReviewSetUpClick };
};
