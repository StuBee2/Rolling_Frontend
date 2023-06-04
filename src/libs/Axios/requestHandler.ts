import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";

const requestHandler = (config: any) => {
  if (
    Token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
    Token.getToken(REFRESH_TOKEN_KEY) !== undefined
  ) {
    config.headers = {
      ...config.headers,
      [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
    };
  } else {
    window.alert("토큰이 존재하지 않습니다!");
    window.location.href = "/login";
  }
  return config;
};

export default requestHandler;
