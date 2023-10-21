import { useMutation } from "react-query";
import GraduateRepositoryImpl from "@src/repositories/Graduate/graduate.repositoryImpl";

export const usePostCertifyMutation = () => {
  const mutation = useMutation((housemaster: string) =>
    GraduateRepositoryImpl.certifyGraduate(housemaster)
  );
  return mutation;
};
