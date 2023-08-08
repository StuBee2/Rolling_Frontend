import { InternalAxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import { customAxios } from "./customAxios";

export const requestHandler = (config: InternalAxiosRequestConfig) => {
  const access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

  if (access_token && refresh_token) {
    customAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${Token.getToken(
      ACCESS_TOKEN_KEY
    )}`;
  } else {
    window.alert("토큰이 존재하지 않습니다!");
    window.location.href = "/signin";
  }
  return config;
};
