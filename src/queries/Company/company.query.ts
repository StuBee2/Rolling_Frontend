import { useMutation, useQuery } from "react-query";
import { CompanyParam } from "../../repositories/Company/company.param";
import companyRepository from "../../repositories/Company/company.repository";

export const usePostRegister = () => {
  const registermutation = useMutation("/company", (data: CompanyParam) =>
    companyRepository.postRegister(data)
  );

  return registermutation;
};
