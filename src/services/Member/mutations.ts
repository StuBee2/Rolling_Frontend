import { useMutation } from "react-query";
import { MemberNickNameParam } from "./api";
import memberApi from "./api";

export const usePatchMyNickNameMutation = () => {
  const mutation = useMutation((nickName: MemberNickNameParam) =>
    memberApi.patchMyNickName(nickName)
  );
  return mutation;
};
