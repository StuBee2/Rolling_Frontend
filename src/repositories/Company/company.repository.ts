import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "../../types/company.type";
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

  getCompanyRankWelfare(): Promise<CompanyListType[]>;

  getCompanyRankTotal(): Promise<CompanyListType[]>;

  getCompanyRankSalary(): Promise<CompanyListType[]>;

  getCompanyRankBalance(): Promise<CompanyListType[]>;
}
