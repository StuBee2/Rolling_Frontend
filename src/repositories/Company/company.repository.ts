import { customAxios } from "../../libs/Axios/customAxios";
import { CompanyInfoId, CompanyInfoType } from "../../types/company.type";
import { CompanyParam } from "./company.param";

class CompanyRepository {
  public async postRegister(data: CompanyParam): Promise<void> {
    await customAxios.post("/company", data);
  }

  public async getCompanyInfo({ id }: CompanyInfoId): Promise<CompanyInfoType> {
    const { data } = await customAxios.get(`/company/info/${id}`);
    return data;
  }

  // public async getCompanyInfo(data: C);

  // public async getCompanyInfo(data: CompanyInfoType);
}

export default new CompanyRepository();
