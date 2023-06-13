import { customAxios } from "../../libs/Axios/customAxios";
import { CompanyInfoType, CompanyListType } from "../../types/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { CompanyNameParam, CompanyParam } from "./company.param";
import { CompanyRepository } from "./company.repository";

class CompanyRepositoryImpl implements CompanyRepository {
  public async postRegister(data: CompanyParam): Promise<void> {
    await customAxios.post("/company", data);
  }

  public async getMyCompanyList(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/my");
    return data;
  }

  public async getCompanySearchList(
    { name }: CompanyNameParam,
    { page, size }: CommonPageParam
  ): Promise<CompanyListType[]> {
    const { data } = await customAxios.get(
      `/company/search?name=${name}&page=${page}&size=${size}`
    );
    return data;
  }

  public async getCompanyList(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/list");
    return data;
  }

  public async getCompanyListId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<CompanyListType[]> {
    const { data } = await customAxios.get(
      `/company/list/${id}?page=${page}&size=${size}`
    );
    return data;
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
}

export default new CompanyRepositoryImpl();
