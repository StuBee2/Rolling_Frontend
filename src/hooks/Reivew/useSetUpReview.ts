import { QUERY_KEYS } from "@src/queries/queryKey";
import { useDeleteMyReviewMutation } from "@src/queries/Review/review.query";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useQueryClient } from "react-query";

export const useSetUpReview = () => {
  const [isClickDots, setIsClickDots] = useState(false);
  const queryClient = useQueryClient();
  const deleteMyReview = useDeleteMyReviewMutation();
  const { rollingToast } = useRollingToast();

  const hanldeReviewSetUpClick = (id: number, reviewId: string) => {
    switch (id) {
      case 0:
        return;
      case 1:
        return hanldeDeleteMyReview(reviewId);
      case 2:
        return setIsClickDots(false);
      default:
        break;
    }
  };

  const hanldeDeleteMyReview = (reviewId: string) => {
    const answer = window.confirm("리뷰한 회사를 삭제하시겠습니까?");
    if (answer) {
      deleteMyReview.mutate(reviewId, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.review.getMyReview);
          rollingToast("리뷰를 삭제하였습니다.", "success");
        },
        onError: () => {
          rollingToast("리뷰를 삭제하지 못했습니다", "error");
        },
      });
    }
  };

  return { isClickDots, setIsClickDots, hanldeReviewSetUpClick };
};
