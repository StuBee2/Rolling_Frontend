import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import employmentRepositoryImpl from "../../repositories/Employment/employment.repositoryImpl";
import { EmploymentResponse } from "../../types/Employment/employment.type";
import { AxiosError } from "axios";

export const useGetMyEmploymenyListQuery = (
  options?: UseQueryOptions<
    EmploymentResponse[],
    AxiosError,
    EmploymentResponse[],
    string
  >
): UseQueryResult<EmploymentResponse[], AxiosError> =>
  useQuery(
    QUERY_KEYS.employment.getMyEmploymentList,
    () => employmentRepositoryImpl.getMyEmployList(),
    { ...options }
  );