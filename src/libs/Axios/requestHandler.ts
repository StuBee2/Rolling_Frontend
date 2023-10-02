import { InternalAxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "../Token/Token";
import { rollingAxios } from "./customAxios";
import dayjs from "dayjs";
import authRepositoryImpl from "@src/repositories/Auth/auth.repositoryImpl";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";

export const requestHandler = async (config: InternalAxiosRequestConfig) => {
  let access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);
  const expirationAt = new Date(Number(jwtDecoding("exp")) * 1000); // 1000을 곱해 밀리초 단위로 변환
  // 만료시간과 현재 시간을 비교하여 0 미만이면 어세스 토큰이 만료된 것이므로 아래 조건문 실행
  if (dayjs(expirationAt).diff(dayjs()) < 0 && refresh_token) {
    try {
      const { accessToken: newAccessToken } =
        await authRepositoryImpl.postRefreshToken({
          refreshToken: refresh_token,
        });
      Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
      access_token = newAccessToken;
    } catch (e) {
      // 요청을 실패하면 리프레쉬 토큰도 만료이므로 아래처럼 처리
      Token.clearToken();
      window.alert("토큰이 만료되었습니다!");
      window.location.href = "/";
    }
  }

  rollingAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${access_token}`;
  return config;
};
