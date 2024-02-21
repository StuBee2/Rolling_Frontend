import { MemberType } from "@src/types/Member/member.type";
import { AxiosError } from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import MemberApi from "./api";
import { SuspenseType } from "@src/types/common/commont.type";

export const useGetMyInfoQuery = (
  suspense?: SuspenseType
): UseQueryResult<MemberType, AxiosError> =>
  useQuery(QUERY_KEYS.member.getMyMember, () => MemberApi.getMyInfo(), {
    suspense: suspense?.suspense,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
