// <<<<<<< HEAD
// import { customAxios } from "../../libs/Axios/customAxios";
// import { CompanyInfoId, CompanyInfoType } from "../../types/company.type";
// import { CompanyParam } from "./company.param";

// class CompanyRepository {
//   public async postRegister(data: CompanyParam): Promise<void> {
//     await customAxios.post("/company", data);
//   }

//   public async getCompanyInfo({ id }: CompanyInfoId): Promise<CompanyInfoType> {
//     const { data } = await customAxios.get(`/company/info/${id}`);
//     return data;
//   }

//   // public async getCompanyInfo(data: C);

//   // public async getCompanyInfo(data: CompanyInfoType);
// =======
import { CompanyInfoType, CompanyListType } from "../../types/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { CompanyNameParam, CompanyParam } from "./company.param";

export interface CompanyRepository {
  postRegister(data: CompanyParam): Promise<void>;

  getMyCompanyList(): Promise<CompanyListType[]>;

  getCompanySearchList(
    { name }: CompanyNameParam,
    { page, size }: CommonPageParam
  ): Promise<CompanyListType[]>;

  getCompanyList(): Promise<CompanyListType[]>;

  getCompanyListId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<CompanyListType[]>;

  getCompanyInfoId({ id }: CommonIdParam): Promise<CompanyInfoType>;

  getCompanyRankWelfare(): Promise<CompanyListType[]>;

  getCompanyRankTotal(): Promise<CompanyListType[]>;

  getCompanyRankSalary(): Promise<CompanyListType[]>;

  getCompanyRankBalance(): Promise<CompanyListType[]>;
}
