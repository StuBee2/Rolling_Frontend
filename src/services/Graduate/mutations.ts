import { useMutation } from "react-query";
import GraduateApi from "./api";

export const usePostCertifyMutation = () => {
  const mutation = useMutation((housemaster: string) =>
    GraduateApi.certifyGraduate(housemaster)
  );
  return mutation;
};
