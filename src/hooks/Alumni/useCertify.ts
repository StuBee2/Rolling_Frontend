import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import React, { ChangeEvent, useState } from "react";
import Token from "@src/libs/Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import { useNavigate } from "react-router-dom";
import { usePostCertifyMutation } from "@src/services/Graduate/mutations";
import authApi from "@src/services/Auth/api";

export const useCertify = () => {
  const [housemaster, setHousemaster] = useState<string>("");

  const { rollingToast } = useRollingToast();
  const postCertify = usePostCertifyMutation();
  const navigate = useNavigate();

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHousemaster(e.target.value);
  };

  const tokenRefresh = async () => {
    const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);
    if (refresh_token) {
      try {
        const { accessToken: newAccessToken } = await authApi.postRefreshToken({
          refreshToken: refresh_token,
        });

        Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
        rollingToast("동문 인증에 성공하였습니다.", "success");
        navigate("/mypage/profile");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleGraduateCertified = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (housemaster.trim() === "") {
      return rollingToast("사감선생님 성함을 작성해주세요", "warning");
    }
    postCertify.mutate(housemaster, {
      onSuccess: () => {
        tokenRefresh();
      },
      onError: () => {
        rollingToast("졸업생 인증 실패", "error");
      },
    });
  };

  return {
    housemaster,
    handleQuestionChange,
    handleGraduateCertified,
    navigate,
    rollingToast,
  };
};
