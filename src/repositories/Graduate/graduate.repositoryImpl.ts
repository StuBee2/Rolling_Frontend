import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";
import { graduateRepository } from "./graduate.repository";
import { rollingAxios } from "@src/libs/Axios/customAxios";

class GraduateRepositoryImpl implements graduateRepository {
  public async CertifyGraduate(
    housemaster: GraduateCertifiedType
  ): Promise<void> {
    const { data } = await rollingAxios.patch("/auth/certify", housemaster);
    return data;
  }
}

export default new GraduateRepositoryImpl();
