import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import ReviewRepositoryImpl from "../../repositories/Review/review.repositoryImpl";
import {
  ReviewInfiniteScrollListType,
  ReviewListType,
} from "../../types/review.type";
import { AxiosError } from "axios";
import { CommonIdParam } from "../../repositories/common.param";
import { QUERY_KEYS } from "../queryKey";
import { ReviewID } from "../../types/review.type";

import { ReviewParam } from "../../repositories/Review/review.repository";

export const useGetMyReviewQuery = (
  options?: UseInfiniteQueryOptions<
    ReviewInfiniteScrollListType,
    AxiosError,
    ReviewInfiniteScrollListType,
    ReviewInfiniteScrollListType,
    string
  >
): UseInfiniteQueryResult<ReviewInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getMyReview,
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getMyReviewList({ page: pageParam }),
    {
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewListwMemberIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    ReviewInfiniteScrollListType,
    AxiosError,
    ReviewInfiniteScrollListType,
    ReviewInfiniteScrollListType,
    string[]
  >
): UseInfiniteQueryResult<ReviewInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getReviewListMemberId(id),
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getListReviewMemberId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewListCompanyIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    ReviewInfiniteScrollListType,
    AxiosError,
    ReviewInfiniteScrollListType,
    ReviewInfiniteScrollListType,
    string[]
  >
): UseInfiniteQueryResult<ReviewInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getReviewListCompanyId(id),
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getListReviewCompanyId({ id }, { page: pageParam }),
    {
      ...options,
      enabled: !!id,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    string[]
  >
): UseQueryResult<ReviewListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.review.getReviewInfoId(id),
    () => ReviewRepositoryImpl.getReviewInfoId({ id }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const usePostReviewMutation = () => {
  const mutation = useMutation((reviewInfo: ReviewParam) =>
    ReviewRepositoryImpl.postReview(reviewInfo)
  );
  return mutation;
};

export const useDeleteReviewQuery = () => {
  const mutation = useMutation(({ reviewId }: ReviewID) =>
    ReviewRepositoryImpl.deleteReview({ reviewId })
  );
  return mutation;
};
