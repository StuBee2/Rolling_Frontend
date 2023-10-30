import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { customAxios, rollingAxios } from "@src/libs/Axios/customAxios";
import Token from "@src/libs/Token/Token";
import {
  CompanyInfiniteScrollType,
  CompanyInfoType,
  CompanyListType,
} from "@src/types/Company/company.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import {
  CompanyIdParam,
  CompanyKeywordParam,
  CompanyParam,
  CompanyRepository,
} from "./company.repository";

class CompanyRepositoryImpl implements CompanyRepository {
  public async postRegister(
    companyData: CompanyParam
  ): Promise<{ id: string }> {
    const { data } = await rollingAxios.post("/company", companyData);
    return data;
  }

  public async getMyCompanyList({
    page,
  }: CommonPageParam): Promise<CompanyInfiniteScrollType> {
    const { data } = await rollingAxios.get(
      `/company/list/my?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getCompanySearchList(
    { keyword }: CompanyKeywordParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/search?name=${keyword}&page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getAllCompanyList({
    page,
  }: CommonPageParam): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/list/all?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getAllAndSearchCompanyList(
    { keyword }: CompanyKeywordParam,
    { page }: CommonPageParam
  ): Promise<CompanyInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/company/${keyword}page=${page}&size=10`
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
    const { data } = Token.getToken(ACCESS_TOKEN_KEY)
      ? await rollingAxios.get(`/company/info/${id}`)
      : await customAxios.get(`/company/info/${id}`);

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
    const { data } = await rollingAxios.get("/company/rank/career");
    return data;
  }

  public async getCompanyRankBalance(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/rank/balance");
    return data;
  }

  public async getCompanyRankSelect(
    rankCategory: string
  ): Promise<CompanyListType[]> {
    const { data } = await customAxios.get(`/company/rank/${rankCategory}`);
    return data;
  }

  public async deleteCompany(companyId: CompanyIdParam): Promise<void> {
    await rollingAxios.delete(`/company/${companyId}`);
  }

  public async patchCompany(input: {
    companyId: string;
    companyData: CompanyParam;
  }): Promise<void> {
    await rollingAxios.patch(`/company/${input.companyId}`, input.companyData);
  }
}

export default new CompanyRepositoryImpl();
