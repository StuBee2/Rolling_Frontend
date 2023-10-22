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
import Token from "@src/libs/Token/Token";

export const useGetMyInfoQuery = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, string>
): UseQueryResult<MemberType, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => MemberRepositoryImpl.getMyInfo(),
    {
      ...options,
      onError: () => {
        window.alert("토큰이 위조 됐습니다.");
        Token.clearToken();
        window.location.href = "/";
      },
    }
  );

export const usePatchMyNickNameMutation = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    MemberRepositoryImpl.patchMyNickName(nickName)
  );
  return mutation;
};
