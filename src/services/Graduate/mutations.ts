import { useMutation } from "react-query";
import graduateApi from "./api";

export const usePostCertifyMutation = () => {
  const mutation = useMutation((housemaster: string) =>
    graduateApi.certifyGraduate(housemaster)
  );
  return mutation;
};
