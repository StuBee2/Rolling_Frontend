import { customAxios } from "../../libs/Axios/customAxios";
import { EmployRepository } from "./employment.repository";
import { EmploymentResponse } from "../../types/Employment/employment.type";

class EmployRepositoryImpl implements EmployRepository {
  public async getMyEmployList(): Promise<EmploymentResponse[]> {
    const { data } = await customAxios("/employment/my");
    return data;
  }
}
export default new EmployRepositoryImpl();