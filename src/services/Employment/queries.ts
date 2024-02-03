import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../services/queryKey";

import EmplotmentApi from "./api";

export const useGetMyEmploymenyListQuery = () =>
  useQuery(
    QUERY_KEYS.employment.getMyEmploymentList,
    () => EmplotmentApi.getMyEmployList(),
    { suspense: true, staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60 }
  );
