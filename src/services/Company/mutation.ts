import { useMutation } from "react-query";
import CompanyApi, { CompanyParam } from "./api";

export const usePostCompanyRegisterMutation = () => {
  const registermutation = useMutation((data: CompanyParam) =>
    CompanyApi.postRegister(data)
  );
  return registermutation;
};

export const useDeleteCompanyMutation = () => {
  const mutation = useMutation((param: string) =>
    CompanyApi.deleteCompany({ companyId: param })
  );
  return mutation;
};

export const usePatchCompanyMutation = () => {
  const mutation = useMutation(
    (input: { companyId: string; companyData: CompanyParam }) =>
      CompanyApi.patchCompany(input)
  );
  return mutation;
};
