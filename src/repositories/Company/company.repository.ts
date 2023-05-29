import { customAxios } from "../../libs/Axios/customAxios";
import { CompanyListType } from "../../types/company.type";
import { CompanyParam } from "./company.param";

class CompanyRepository {
  public async postRegister(data: CompanyParam): Promise<void> {
    await customAxios.post("/company", data);
  }

  public async getMyRegistList(): Promise<CompanyListType[]> {
    const { data } = await customAxios.get("/company/my");
    return data;
  }
}

export default new CompanyRepository();
