// import refresh
import { usePostCertifyMutation } from "@src/queries/Graduate/graduate.query";
import authRepositoryImpl from "@src/repositories/Auth/auth.repositoryImpl";
import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import React, { ChangeEvent, useState } from "react";
import Token from "@src/libs/Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import { useNavigate } from "react-router-dom";

export const useCertify = () => {
  const [certifiedData, setCertifiedData] = useState<GraduateCertifiedType>({
    housemaster: "",
  });

  const { rollingToast } = useRollingToast();
  const postCertified = usePostCertifyMutation();
  const navigate = useNavigate();

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCertifiedData((prev) => ({ ...prev, [name]: value }));
  };

  const TokenRefresh = async () => {
    const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);
    if (refresh_token) {
      try {
        const { accessToken: newAccessToken } =
          await authRepositoryImpl.postRefreshToken({
            refreshToken: refresh_token,
          });

        Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
        rollingToast("졸업생 인증 성공", "success");
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleGraduateCertified = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { housemaster } = certifiedData;

    if (housemaster.trim() === "") {
      return rollingToast("사감선생님 성함을 작성해주세요", "warning");
    }
    postCertified.mutate(
      {
        housemaster,
      },
      {
        onSuccess: () => {
          TokenRefresh();
        },
        onError: () => {
          rollingToast("졸업생 인증 실패", "error");
        },
      }
    );
  };

  return {
    handleQuestionChange,
    handleGraduateCertified,
  };
};
