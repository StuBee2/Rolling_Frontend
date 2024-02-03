import { EmploymentResponse } from "@src/types/Employment/employment.type";
import { rollingAxios } from "@src/libs/Axios/RollingAxios";

class EmployApi {
  public async getMyEmployList(): Promise<EmploymentResponse[]> {
    const { data } = await rollingAxios.post("/employment/my");
    return data;
  }
}
export default new EmployApi();
