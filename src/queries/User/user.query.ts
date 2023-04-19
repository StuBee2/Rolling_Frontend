import { useMutation, useQuery } from "react-query";
import userRepository from "../../repositories/User/user.repository";
import { NickNameType } from "../../repositories/User/user.param";

export const useGetMyInfo = () =>
  useQuery("/member/my", () => userRepository.getMyInfo(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const usePatchMyNickName = () => {
  const mutation = useMutation("/patch/nickName", (nickName: NickNameType) =>
    userRepository.patchMyNickName(nickName)
  );
  return mutation;
};
