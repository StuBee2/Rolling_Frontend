import { UseBaseQueryResult, UseQueryOptions, useQuery } from "react-query";
import reviewRepository from "../../repositories/Review/review.repository";
import { ReviewListType } from "../../types/review.type";
import { AxiosError } from "axios";

export const useGetMyReview = (
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    "/review/my"
  >
): UseBaseQueryResult<ReviewListType[], AxiosError> =>
  useQuery("/review/my", () => reviewRepository.getMyReviewList(), {
    ...options,
  });
