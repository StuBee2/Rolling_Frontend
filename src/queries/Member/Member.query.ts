import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import MemberRepositoryImpl from "@src/repositories/Member/member.repositoryImpl";
import { MemberType } from "@src/types/Member/member.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import { MemberNickNameParam } from "@src/repositories/Member/member.repository";

export const useGetMyInfoQuery = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, string>
): UseQueryResult<MemberType, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => MemberRepositoryImpl.getMyInfo(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePatchMyNickNameMutation = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    MemberRepositoryImpl.patchMyNickName(nickName)
  );
  return mutation;
};
