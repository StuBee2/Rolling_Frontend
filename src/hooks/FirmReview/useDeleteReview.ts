import { useCallback } from "react";
import { QueryClient } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKey";
import { useDeleteReviewQuery } from "../../queries/Review/review.query";

export function useReviewDelete() {
  const deleteReviewMutation = useDeleteReviewQuery();
  const queryClient = new QueryClient();

  const onDeleteReview = useCallback((reviewId: string) => {
    const answer = window.confirm("회사 리뷰를 삭제하시겠습니까?");
    if (answer === true) {
      deleteReviewMutation.mutate(
        {
          reviewId: reviewId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEYS.review.deleteReview]);
            console.log("리뷰 삭제 성공");
          },
          onError: () => {
            console.log("회사 삭제 실패");
          },
        }
      );
    }
  }, []);

  return { onDeleteReview };
}
