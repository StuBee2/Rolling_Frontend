import { graduateRepository } from "./graduate.repository";
import { rollingAxios } from "@src/libs/Axios/customAxios";

class GraduateRepositoryImpl implements graduateRepository {
  public async certifyGraduate(housemaster: string): Promise<void> {
    await rollingAxios.patch("/auth/certify", { housemaster });
  }
}

export default new GraduateRepositoryImpl();
