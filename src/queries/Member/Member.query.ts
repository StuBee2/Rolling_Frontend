import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import { MemberNickNameParam } from "../../repositories/Member/member.param";
import memberRepository from "../../repositories/Member/member.repository";
import { MemberType } from "../../types/member.type";
import { AxiosError } from "axios";

export const useGetMyInfo = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, "/member">
): UseQueryResult<MemberType, AxiosError> =>
  useQuery("/member", () => memberRepository.getMyInfo(), { ...options });

export const usePatchMyNickName = () => {
  const mutation = useMutation(
    "/patch/nickName",
    (nickName: MemberNickNameParam) =>
      memberRepository.patchMyNickName(nickName)
  );
  return mutation;
};
