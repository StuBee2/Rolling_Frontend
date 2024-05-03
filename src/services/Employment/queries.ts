import { UseQueryOptions, useQuery } from "react-query";
import { QUERY_KEYS } from "../../services/queryKey";
import emplotmentApi from "./api";
import { EmploymentResponse } from "@src/types/Employment/employment.type";
import { AxiosError } from "axios";

export const useGetMyEmploymenyListQuery = (
  options?: UseQueryOptions<
    EmploymentResponse[],
    AxiosError,
    EmploymentResponse[],
    string
  >
) =>
  useQuery(
    QUERY_KEYS.employment.getMyEmploymentList,
    () => emplotmentApi.getMyEmployList(),
    { staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60, ...options }
  );
