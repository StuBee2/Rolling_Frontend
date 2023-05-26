import { useMutation } from "react-query";
import { ReviewParam } from "../../repositories/Review/review.param";
import reviewRepository from "../../repositories/Review/review.repository";

export const usePostReview = () => {
  const reviewmutation = useMutation("/review", (data: ReviewParam) =>
    reviewRepository.postReview(data)
  );

  return reviewmutation;
};
