import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";

export interface graduateRepository {
  CertifyGraduate(housemaster: GraduateCertifiedType): Promise<void>;
}
