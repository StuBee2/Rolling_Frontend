import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "../Token/Token";
import authRepositoryImpl from "@src/repositories/Auth/auth.repositoryImpl";
import { rollingAxios } from "./customAxios";

export const responseHandler = async (error: AxiosError) => {
  const access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (access_token && refresh_token && status === 401) {
      try {
        const { accessToken: newAccessToken } =
          await authRepositoryImpl.postRefreshToken({
            refreshToken: refresh_token,
          });

        Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

        rollingAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;

        return rollingAxios(originalRequest);
      } catch (e) {
        Token.clearToken();
        window.alert("토큰이 만료되었습니다!");
        window.location.href = "/";
      }
    }
  }
  return Promise.reject(error);
};
