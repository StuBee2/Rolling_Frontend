import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import MemberRepositoryImpl from "../../repositories/Member/member.repositoryImpl";
import { MemberType } from "../../types/Member/member.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import { MemberNickNameParam } from "../../repositories/Member/member.repository";

export const useGetMyInfoQuery = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, string>
): UseQueryResult<MemberType, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => MemberRepositoryImpl.getMyInfo(),
    { ...options }
  );

export const usePatchMyNickNameMutation = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    MemberRepositoryImpl.patchMyNickName(nickName)
  );
  return mutation;
};
