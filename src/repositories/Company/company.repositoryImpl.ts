import { customAxios } from "../../libs/Axios/customAxios";
import {
  CompanyID,
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "../../types/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import {
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

  public async getCompanyRankWelfare(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/welfare");
    return data;
  }

  public async getCompanyRankTotal(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/total");
    return data;
  }

  public async getCompanyRankSalary(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/salary");
    return data;
  }

  public async getCompanyRankBalance(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/balance");
    return data;
  }

  public async deleteCompany({ companyId }: CompanyID): Promise<void> {
    const { data } = await customAxios.delete(`/company/${companyId}`);
    return data;
  }
}

export default new CompanyRepositoryImpl();
