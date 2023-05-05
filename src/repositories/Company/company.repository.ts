import { customAxios } from "../../libs/Axios/customAxios";
import { CompanyParamType } from "./company.param";

class CompanyRepository {
  public async postRegister(data: CompanyParamType): Promise<void> {
    await customAxios.post("/company", data);
  }
}

export default new CompanyRepository();
