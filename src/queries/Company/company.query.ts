import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import { CompanyParam } from "../../repositories/Company/company.param";
import companyRepository from "../../repositories/Company/company.repository";
import { CompanyListType } from "../../types/company.type";
import { AxiosError } from "axios";

export const usePostRegister = () => {
  const registermutation = useMutation("/company", (data: CompanyParam) =>
    companyRepository.postRegister(data)
  );

  return registermutation;
};

export const useGetMyRegist = (
  options?: UseQueryOptions<
    CompanyListType[],
    AxiosError,
    CompanyListType[],
    "/company/my"
  >
): UseQueryResult<CompanyListType[], AxiosError> =>
  useQuery("/company/my", () => companyRepository.getMyRegistList(), {
    ...options,
  });
