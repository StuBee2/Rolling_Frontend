import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "../Token/Token";
import { customAxios } from "./customAxios";
import authRepositoryImpl from "@src/repositories/Auth/auth.repositoryImpl";

export const responseHandler = async (config: AxiosError) => {
  const access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

  if (access_token && refresh_token && config.response?.status === 401) {
    try {
      const { accessToken } = await authRepositoryImpl.postRefreshToken(
        refresh_token
      );

      Token.setToken(ACCESS_TOKEN_KEY, accessToken);

      customAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${accessToken}`;
    } catch (e) {
      window.alert("세션이 만료되었습니다!");
      Token.clearToken();
      window.location.href = "/signin";
    }
  }
  return Promise.reject(config);
};
