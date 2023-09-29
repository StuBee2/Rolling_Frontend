import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import employmentRepositoryImpl from "@src/repositories/Employment/employment.repositoryImpl";
import { EmploymentResponse } from "@src/types/Employment/employment.type";
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
    { ...options, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );
