import { MemberType } from "@src/types/Member/member.type";
import { AxiosError } from "axios";
import { UseQueryOptions, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import memberApi from "./api";

export const useGetMyInfoQuery = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, string>
) =>
  useQuery(QUERY_KEYS.member.getMyMember, () => memberApi.getMyInfo(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });
