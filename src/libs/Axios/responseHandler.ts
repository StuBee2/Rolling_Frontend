import { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import { customAxios } from "./customAxios";
import authRepositoryImpl from "../../repositories/Auth/auth.repositoryImpl";

export const responseHandler = async ({
  config,
  response,
}: {
  config: AxiosRequestConfig;
  response?: { status: number };
}) => {
  const status = response?.status;
  const access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

  if (status === 401 && access_token && refresh_token) {
    try {
      const { accessToken } = await authRepositoryImpl.postRefreshToken(
        refresh_token
      );

      Token.setToken(ACCESS_TOKEN_KEY, accessToken);

      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          [REQUEST_TOKEN_KEY]: `Bearer ${accessToken}`,
        },
      };

      return customAxios(newConfig);
    } catch (error) {
      window.alert("세션이 만료 되었습니다!");
      window.location.href = "/login";
      return Promise.reject(error);
    }
  }

  return Promise.reject(config);
};
