import { useInfiniteQuery, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import CompanyApi from "./api";
import { CommonIdParam, SuspenseType } from "@src/types/common/commont.type";

export const useGetMyCompanyListQuery = () =>
  useInfiniteQuery(
    QUERY_KEYS.company.getMyListCompany,
    ({ pageParam = 1 }) => CompanyApi.getMyCompanyList({ page: pageParam }),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanySerachListQuery = (
  keyword: string,
  suspense?: SuspenseType
) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListSearchCompany(keyword),
    ({ pageParam = 1 }) =>
      CompanyApi.getCompanySearchList({ keyword }, { page: pageParam }),
    {
      suspense: suspense?.suspense,
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetAllCompanyListQuery = () =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListAllCompany,
    ({ pageParam = 1 }) => CompanyApi.getAllCompanyList({ page: pageParam }),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyListIdQuery = ({ id }: CommonIdParam) =>
  useInfiniteQuery(
    QUERY_KEYS.company.getCompanyId(id),
    ({ pageParam = 1 }) =>
      CompanyApi.getCompanyListId({ id }, { page: pageParam }),
    {
      suspense: true,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetCompanyInfoIdQuery = ({ id }: CommonIdParam) =>
  useQuery(
    QUERY_KEYS.company.getInfoCompanyId(id),
    () => CompanyApi.getCompanyInfoId({ id }),
    {
      suspense: true,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankTotalQuery = () =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankTotal,
    () => CompanyApi.getCompanyRankTotal(),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankSalaryBenefitsQuery = () =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankSalaryBenefits,
    () => CompanyApi.getCompanyRankSalaryBenefits(),
    { suspense: true, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankCulture = () =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCulture,
    () => CompanyApi.getCompanyRankCulture(),
    { suspense: true, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankCareer = () =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCareer,
    () => CompanyApi.getCompanyRankCareer(),
    { suspense: true, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );

export const useGetCompanyRankBalanceQuery = () =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankBalnce,
    () => CompanyApi.getCompanyRankBalance(),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetCompanyRankSelectQuery = (rankCategory: string) =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankCategory(rankCategory),
    () => CompanyApi.getCompanyRankSelect(rankCategory),
    {
      suspense: true,
      enabled: !!rankCategory,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
