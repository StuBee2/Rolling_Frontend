import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "../../types/Company/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";

export interface CompanyParam {
  name: string;
  address: string;
  description: string;
  imgUrl: string;
}

export interface CompanyNameParam {
  name: string;
}

export interface CompanyIdParam {
  companyId: string;
}

export interface CompanyRepository {
  postRegister(companyData: CompanyParam): Promise<CompanyListType>;

  getMyCompanyList({
    page,
  }: CommonPageParam): Promise<CompanyInfiniteScrollType>;

  getCompanySearchList(
    { name }: CompanyNameParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType>;

  getCompanyList({ page }: CommonPageParam): Promise<CompanyInfiniteScrollType>;

  getCompanyListId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType>;

  getCompanyInfoId({ id }: CommonIdParam): Promise<CompanyInfoType>;

  getCompanyRankSalaryBenefits(): Promise<CompanyListType[]>;

  getCompanyRankTotal(): Promise<CompanyListType[]>;

  getCompanyRankCulture(): Promise<CompanyListType[]>;

  getCompanyRankCareer(): Promise<CompanyListType[]>;

  getCompanyRankBalance(): Promise<CompanyListType[]>;

  deleteCompany(companyId: CompanyIdParam): Promise<void>;
}
