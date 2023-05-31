import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import { MemberNickNameParam } from "../../repositories/Member/member.param";
import memberRepositoryImpl from "../../repositories/Member/member.repositoryImpl";
import { MemberType } from "../../types/member.type";
import { AxiosError } from "axios";

export const useGetMyInfo = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, "/member">
): UseQueryResult<MemberType, AxiosError> =>
  useQuery("/member", () => memberRepositoryImpl.getMyInfo(), { ...options });

export const usePatchMyNickName = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    memberRepositoryImpl.patchMyNickName(nickName)
  );
  return mutation;
};
