import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import { QUERY_KEYS } from "../queryKey";
import companyApi from "./api";
import { CommonIdParam } from "@src/types/common/commont.type";
import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "@src/types/Company/company.type";
import { AxiosError } from "axios";

export const useGetMyCompanyListQuery = (
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getMyListCompany,
    ({ pageParam = 1 }) => companyApi.getMyCompanyList({ page: pageParam }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
    }
  );

export const useGetCompanySerachListQuery = (
  keyword: string,
  options?: UseInfiniteQueryOptions<
    CompanyInfiniteScrollType,
    AxiosError,
    CompanyInfiniteScrollType,
    CompanyInfiniteScrollType,
    string[]
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListSearchCompany(keyword),
    ({ pageParam = 1 }) =>
      companyApi.getCompanySearchList({ keyword }, { page: pageParam }),
    {
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
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
) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListAllCompany,
    ({ pageParam = 1 }) => companyApi.getAllCompanyList({ page: pageParam }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
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
) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getCompanyId(id),
    ({ pageParam = 1 }) =>
      companyApi.getCompanyListId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
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
) =>
  useQuery(
    QUERY_KEYS.company.getInfoCompanyId(id),
    () => companyApi.getCompanyInfoId({ id }),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
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
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankTotal,
    () => companyApi.getCompanyRankTotal(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
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
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankSalaryBenefits,
    () => companyApi.getCompanyRankSalaryBenefits(),
    { staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60, ...options }
  );

export const useGetCompanyRankCulture = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCulture,
    () => companyApi.getCompanyRankCulture(),
    { staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60, ...options }
  );

export const useGetCompanyRankCareer = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCareer,
    () => companyApi.getCompanyRankCareer(),
    { staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60, ...options }
  );

export const useGetCompanyRankBalanceQuery = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankBalnce,
    () => companyApi.getCompanyRankBalance(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
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
) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCategory(rankCategory),
    () => companyApi.getCompanyRankSelect(rankCategory),
    {
      enabled: !!rankCategory,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
