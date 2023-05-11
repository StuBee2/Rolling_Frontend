import { customAxios } from "../../libs/Axios/customAxios";
import { CompanyParam } from "./company.param";

class CompanyRepository {
  public async postRegister(data: CompanyParam): Promise<void> {
    await customAxios.post("/company", data);
  }
}

export default new CompanyRepository();
