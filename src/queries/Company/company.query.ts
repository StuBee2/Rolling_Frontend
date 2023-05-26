import { useMutation, useQuery } from "react-query";
import { CompanyParam } from "../../repositories/Company/company.param";
import companyRepository from "../../repositories/Company/company.repository";
import { CompanyInfoId } from "../../types/company.type";

export const usePostRegister = () => {
  const companymutation = useMutation("/company", (data: CompanyParam) =>
    companyRepository.postRegister(data)
  );

  return companymutation;
};

export const useGetCompanyInfo = ({ id }: CompanyInfoId) =>
  useQuery(
    [`/company/info/${id}`],
    () => companyRepository.getCompanyInfo({ id }),
    {}
  );
