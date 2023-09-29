import { EmployRepository } from "./employment.repository";
import { EmploymentResponse } from "@src/types/Employment/employment.type";
import { rollingAxios } from "@src/libs/Axios/customAxios";

class EmployRepositoryImpl implements EmployRepository {
  public async getMyEmployList(): Promise<EmploymentResponse[]> {
    const { data } = await rollingAxios.post("/employment/my");
    return data;
  }
}
export default new EmployRepositoryImpl();
