import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";
import { useMutation } from "react-query";
import GraduateRepositoryImpl from "@src/repositories/Graduate/graduate.repositoryImpl";

export const usePostCertifyMutation = () => {
  const mutation = useMutation((housemaster: GraduateCertifiedType) =>
    GraduateRepositoryImpl.CertifyGraduate(housemaster)
  );
  return mutation;
};
