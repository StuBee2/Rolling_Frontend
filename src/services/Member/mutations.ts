import { useMutation } from "react-query";
import { MemberNickNameParam } from "./api";
import MemberApi from "./api";

export const usePatchMyNickNameMutation = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    MemberApi.patchMyNickName(nickName)
  );
  return mutation;
};
