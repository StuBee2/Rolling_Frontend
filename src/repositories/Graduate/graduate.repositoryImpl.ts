import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";
import { graduateRepository } from "./graduate.repository";
import { rollingAxios } from "@src/libs/Axios/customAxios";

class GraduateRepositoryImpl implements graduateRepository {
  public async CertifyGraduate(
    housemaster: GraduateCertifiedType
  ): Promise<void> {
    await rollingAxios.patch("/auth/certify", housemaster);
  }
}

export default new GraduateRepositoryImpl();
