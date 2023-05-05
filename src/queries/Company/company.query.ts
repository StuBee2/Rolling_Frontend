import { useMutation, useQuery } from "react-query";
import { CompanyParamType } from "../../repositories/Company/company.param";
import companyRepository from "../../repositories/Company/company.repository";

export const usePostRegister = () => {
  const registermutation = useMutation("/company", (data: CompanyParamType) =>
    companyRepository.postRegister(data)
  );

  return registermutation;
};
