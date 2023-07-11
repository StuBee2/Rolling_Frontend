import { customAxios } from "../../libs/Axios/customAxios";
import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "../../types/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import {
  CompanyIdParam,
  CompanyNameParam,
  CompanyParam,
  CompanyRepository,
} from "./company.repository";

class CompanyRepositoryImpl implements CompanyRepository {
  public async postRegister(
    companyData: CompanyParam
  ): Promise<CompanyListType> {
    const { data } = await customAxios.post("/company", companyData);
    return data;
  }

  public async getMyCompanyList({
    page,
  }: CommonPageParam): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(`/company/my?page=${page}&size=10`);
    return { ...data, nextPage: page + 1 };
  }

  public async getCompanySearchList(
    { name }: CompanyNameParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/search?name=${name}&page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getCompanyList({
    page,
  }: CommonPageParam): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/list&page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getCompanyListId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/list/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getCompanyInfoId({
    id,
  }: CommonIdParam): Promise<CompanyInfoType> {
    const { data } = await customAxios.get(`/company/info/${id}`);
    return data;
  }

  public async getCompanyRankSalaryBenefits(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/salary-benefits");
    return data;
  }

  public async getCompanyRankTotal(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/total");
    return data;
  }

  public async getCompanyRankCulture(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/culture");
    return data;
  }

  public async getCompanyRankCareer(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/career");
    return data;
  }

  public async getCompanyRankBalance(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/balance");
    return data;
  }

  public async deleteCompany(companyId: CompanyIdParam): Promise<void> {
    await customAxios.delete(`/company/${companyId}`);
  }
}

export default new CompanyRepositoryImpl();
