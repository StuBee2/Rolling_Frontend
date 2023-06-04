import axios, { AxiosRequestConfig } from "axios";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import { customAxios } from "./customAxios";
import CONFIG from "../../config/config.json";

export const responseHandler = async ({
  config,
  response,
}: {
  config: AxiosRequestConfig;
  response?: { status: number };
}) => {
  const status = response?.status;
  const access_token = Token.getToken(ACCESS_KEY);
  const refresh_token = Token.getToken(REFRESH_KEY);

  if (status === 401 && access_token && refresh_token) {
    try {
      const { data } = await axios.get(`${CONFIG.SERVER}/auth/refresh`, {
        headers: {
          "Refresh-Token": `Bearer ${refresh_token}`,
        },
      });

      Token.setToken(ACCESS_KEY, data.accessToken);

      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          [REQUEST_KEY]: `Bearer ${data.accessToken}`,
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
