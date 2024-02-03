import { useState } from "react";
import { QUERY_KEYS } from "@src/services/queryKey";
import axios, { AxiosError } from "axios";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { memberErrorHandler } from "@src/utils/Error/Member/memberErrorHandler";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { usePatchMyNickNameMutation } from "@src/services/Member/mutations";

export const useSetUpNickName = (nickName: string) => {
  const patchNickNameMutation = usePatchMyNickNameMutation();
  const [isEditNickName, setIsEditNickName] = useState(false);
  const [setUpNickName, setSetUpNickName] = useState<string>(nickName || "");

  const { rollingToast } = useRollingToast();
  const { queryInvalidates } = useQueryInvalidates();

  const handleEditNickNameQuestion = () => {
    setIsEditNickName(true);
  };

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSetUpNickName(e.target.value);
  };

  const hanldeCancelClick = () => {
    setIsEditNickName(false);
    setSetUpNickName("");
  };

  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setUpNickName.length > 15) {
      return rollingToast("15자내로 입력해주세요.", "warning");
    }

    if (!setUpNickName) {
      return rollingToast("닉네임을 입력해주세요.", "warning");
    }

    if (nickName === setUpNickName) {
      return rollingToast("닉네임을 수정해주세요.", "warning");
    }

    patchNickNameMutation.mutate(
      { nickName: setUpNickName },
      {
        onSuccess: () => {
          rollingToast("닉네임이 수정되었습니다", "success");
          queryInvalidates([
            QUERY_KEYS.member.getMyMember,
            QUERY_KEYS.company.getInfoCompany,
            QUERY_KEYS.story.story,
          ]);
          setIsEditNickName(false);
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data as AxiosError;
            rollingToast(memberErrorHandler(Number(status), message), "error");
          }
        },
      }
    );
  };

  return {
    handleEditNickNameQuestion,
    handleNickNameChange,
    handleNickNameSubmit,
    hanldeCancelClick,
    isEditNickName,
    setUpNickName,
    setSetUpNickName,
  };
};
