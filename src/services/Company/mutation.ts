import { useMutation } from "react-query";
import companyApi, { CompanyParam } from "./api";

export const usePostCompanyRegisterMutation = () => {
  const registermutation = useMutation((data: CompanyParam) =>
    companyApi.postRegister(data)
  );
  return registermutation;
};

export const useDeleteCompanyMutation = () => {
  const mutation = useMutation((param: string) =>
    companyApi.deleteCompany({ companyId: param })
  );
  return mutation;
};

export const usePatchCompanyMutation = () => {
  const mutation = useMutation(
    (input: { companyId: string; companyData: CompanyParam }) =>
      companyApi.patchCompany(input)
  );
  return mutation;
};
