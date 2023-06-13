import {
  UseBaseQueryResult,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "react-query";
import reviewRepositoryImpl from "../../repositories/Review/review.repositoryImpl";
import { ReviewListType } from "../../types/review.type";
import { AxiosError } from "axios";
import {
  CommonIdParam,
  CommonPageParam,
} from "../../repositories/common.param";
import { QUERY_KEYS } from "../queryKey";
import { CompanyId } from "../../repositories/Company/company.param";

export const useGetMyReview = (
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    string
  >
): UseBaseQueryResult<ReviewListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.review.getMyReview,
    () => reviewRepositoryImpl.getMyReviewList({ page, size }),
    {
      ...options,
    }
  );

export const useGetRevieListwMemberId = (
  { id }: CommonIdParam,
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    [string, number]
  >
): UseBaseQueryResult<ReviewListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.review.getReviewListMemberId, id],
    () => reviewRepositoryImpl.getListReviewMemberId({ id }, { page, size }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const useGetReviewListCompanyId = (
  { id }: CommonIdParam,
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    [string, number]
  >
): UseBaseQueryResult<ReviewListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.review.getReviewListCompanyId, id],
    () => reviewRepositoryImpl.getListReviewCompanyId({ id }, { page, size }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const useGetReviewInfoId = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    ReviewListType[],
    AxiosError,
    ReviewListType[],
    [string, number]
  >
): UseBaseQueryResult<ReviewListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.review.getReviewInfoId, id],
    () => reviewRepositoryImpl.getReviewInfoId({ id }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const usePostReview = () => {
  const mutation = useMutation(({ companyId }: CompanyId) =>
    reviewRepositoryImpl.postReview({ companyId })
  );
  return mutation;
};
// export const usePostReview = () => {
//   const mutation = useMutation() =>

// }
