import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import CompanyRepositoryImpl from "@src/repositories/Company/company.repositoryImpl";
import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "@src/types/Company/company.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import { CommonIdParam } from "@src/repositories/common.param";
import {
  CompanyKeywordParam,
  CompanyParam,
} from "@src/repositories/Company/company.repository";

export const usePostCompanyRegisterMutation = () => {
  const registermutation = useMutation((data: CompanyParam) =>
    CompanyRepositoryImpl.postRegister(data)
  );
  return registermutation;
};

export const useGetMyCompanyListQuery = (
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getMyListCompany,
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getMyCompanyList({ page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanySerachListQuery = (
  { keyword }: CompanyKeywordParam,
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string[]
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListSearchCompany(keyword),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getCompanySearchList(
        { keyword },
        { page: pageParam }
      ),
    {
      ...options,
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetAllCompanyListQuery = (
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListAllCompany,
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getAllCompanyList({ page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyListIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string[]
  >
): UseInfiniteQueryResult<CompanyInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getCompanyId(id),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getCompanyListId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    CompanyInfoType,
    AxiosError,
    CompanyInfoType,
    string[]
  >
): UseQueryResult<CompanyInfoType, AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getInfoCompanyId(id),
    () => CompanyRepositoryImpl.getCompanyInfoId({ id }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankTotalQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankTotal,
    () => CompanyRepositoryImpl.getCompanyRankTotal(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankSalaryBenefitsQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankSalaryBenefits,
    () => CompanyRepositoryImpl.getCompanyRankSalaryBenefits(),
    { ...options, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankCulture = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCulture,
    () => CompanyRepositoryImpl.getCompanyRankCulture(),
    { ...options, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankCareer = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCareer,
    () => CompanyRepositoryImpl.getCompanyRankCareer(),
    { ...options, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankBalanceQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankBalnce,
    () => CompanyRepositoryImpl.getCompanyRankBalance(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankSelectQuery = (
  rankCategory: string,
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string[]
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCategory(rankCategory),
    () => CompanyRepositoryImpl.getCompanyRankSelect(rankCategory),
    {
      enabled: !!rankCategory,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useDeleteCompanyMutation = () => {
  const mutation = useMutation((param: string) =>
    CompanyRepositoryImpl.deleteCompany({ companyId: param })
  );
  return mutation;
};

export const usePatchCompanyMutation = () => {
  const mutation = useMutation(
    (input: { companyId: string; companyData: CompanyParam }) =>
      CompanyRepositoryImpl.patchCompany(input)
  );
  return mutation;
};
