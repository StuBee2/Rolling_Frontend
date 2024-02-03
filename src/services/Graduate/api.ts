import { rollingAxios } from "@src/libs/Axios/RollingAxios";

class GraduateApi {
  public async certifyGraduate(housemaster: string): Promise<void> {
    await rollingAxios.patch("/auth/certify", { housemaster });
  }
}

export default new GraduateApi();
