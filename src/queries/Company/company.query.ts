import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import {
  CompanyNameParam,
  CompanyParam,
} from "../../repositories/Company/company.param";
import companyRepositoryImpl from "../../repositories/Company/company.repositoryImpl";
import { CompanyInfoType, CompanyListType } from "../../types/company.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import {
  CommonIdParam,
  CommonPageParam,
} from "../../repositories/common.param";

export const usePostCompanyRegister = () => {
  const registermutation = useMutation((data: CompanyParam) =>
    companyRepositoryImpl.postRegister(data)
  );

  return registermutation;
};

export const useGetMyCompanyList = (
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    [string, number, number]
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.company.getMyListCompany, page, size],
    () => companyRepositoryImpl.getMyCompanyList(),
    {
      ...options,
    }
  );

export const useGetCompanySerachList = (
  { name }: CompanyNameParam,
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    [string, string, number, number]
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.company.getListSearchCompany, name, page, size],
    () => companyRepositoryImpl.getCompanySearchList({ name }, { page, size }),
    {
      ...options,
    }
  );

export const useGetCompanyList = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getListCompany,
    () => companyRepositoryImpl.getCompanyList(),
    {
      ...options,
    }
  );

export const useGetCompanyListId = (
  { id }: CommonIdParam,
  { page, size }: CommonPageParam,
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    [string, number, number, number]
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    [QUERY_KEYS.company.getListCompanyId, id, page, size],
    () => companyRepositoryImpl.getCompanyListId({ id }, { page, size }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const useGetCompanyInfoId = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    CompanyInfoType,
    AxiosError,
    CompanyInfoType,
    [string, number]
  >
): UseQueryResult<CompanyInfoType, AxiosError> =>
  useQuery(
    [QUERY_KEYS.company.getListInfoCompanyId, id],
    () => companyRepositoryImpl.getCompanyInfoId({ id }),
    {
      enabled: !!id,
      ...options,
    }
  );

export const useGetCompanyRankWelfare = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankWelfare,
    () => companyRepositoryImpl.getCompanyRankWelfare(),
    {
      ...options,
    }
  );

export const useGetCompanyRankTotal = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankTotal,
    () => companyRepositoryImpl.getCompanyRankTotal(),
    {
      ...options,
    }
  );

export const useGetCompanyRankSalary = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankSalary,
    () => companyRepositoryImpl.getCompanyRankSalary(),
    {
      ...options,
    }
  );

export const useGetCompanyRankBalance = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    string
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery(
    QUERY_KEYS.company.getCompanyRankWelfare,
    () => companyRepositoryImpl.getCompanyRankBalance(),
    {
      ...options,
    }
  );
