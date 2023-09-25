import { useState } from "react";
import { usePatchMyNickNameMutation } from "@src/queries/Member/Member.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import axios from "axios";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { memberErrorHandler } from "@src/utils/Error/Member/memberErrorHandler";

export const useEditNickName = (nickName: string) => {
  const patchNickNameMutation = usePatchMyNickNameMutation();
  const [isEditNickName, setIsEditNickName] = useState(false);
  const [editNickName, setEditNickName] = useState<string>(nickName);
  const queryClient = useQueryClient();
  const { rollingToast } = useRollingToast();

  const handleEditNickNameQuestion = () => {
    const answer = window.confirm("닉네임을 수정하시겠습니까?");
    if (answer) {
      setIsEditNickName(true);
    }
  };

  const handleEditNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditNickName(e.target.value);
  };

  const hanldeEditNickNameCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const answer = window.confirm("닉네임 수정을 취소하시겠습니까?");
    if (answer) {
      setIsEditNickName(false);
      setEditNickName(nickName);
    }
  };

  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editNickName.length > 15) {
      return rollingToast("15자내로 입력해주세요.", "warning");
    }

    if (!editNickName) {
      return rollingToast("닉네임을 입력해주세요.", "warning");
    }

    if (nickName === editNickName) {
      return rollingToast("닉네임을 수정해주세요.", "warning");
    }

    patchNickNameMutation.mutate(
      { nickName: editNickName },
      {
        onSuccess: () => {
          rollingToast("닉네임이 수정되었습니다", "success");
          queryClient.invalidateQueries(QUERY_KEYS.member.getMyMember);
          setIsEditNickName(false);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data;
            rollingToast(memberErrorHandler(status, message), "error");
          }
        },
      }
    );
  };

  return {
    handleEditNickNameQuestion,
    handleEditNickNameChange,
    handleNickNameSubmit,
    hanldeEditNickNameCancel,
    isEditNickName,
    editNickName,
  };
};
