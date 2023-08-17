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
    QUERY_KEYS.company.getListCompany,
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getAllCompanyList({ page: pageParam }),
    {
      ...options,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetAllAndSearchCompanyListQuery = (
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
    QUERY_KEYS.company.getListAllAndSearchCompany(keyword),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getAllAndSearchCompanyList(
        { keyword: keyword },
        { page: pageParam }
      ),
    {
      ...options,
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
    QUERY_KEYS.company.getListCompanyId(id),
    ({ pageParam = 1 }) =>
      CompanyRepositoryImpl.getCompanyListId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
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
    QUERY_KEYS.company.getListInfoCompanyId(id),
    () => CompanyRepositoryImpl.getCompanyInfoId({ id }),
    {
      enabled: !!id,
      ...options,
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
    { ...options }
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
    { ...options }
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
    { ...options }
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
    }
  );

export const useGetCompanyRankSelectQuery = (
  rankCategory: string,
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRank,
    () => CompanyRepositoryImpl.getCompanyRankSelect(rankCategory),
    {
      enabled: !!rankCategory,
      ...options,
    }
  );

export const useDeleteCompanyMutation = () => {
  const mutation = useMutation((param: string) =>
    CompanyRepositoryImpl.deleteCompany({ companyId: param })
  );
  return mutation;
};
