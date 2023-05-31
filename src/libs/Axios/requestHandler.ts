import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";

const requestHandler = (config: any) => {
  if (
    Token.getToken(ACCESS_KEY) !== undefined &&
    Token.getToken(REFRESH_KEY) !== undefined
  ) {
    config.headers = {
      ...config.headers,
      [REQUEST_KEY]: `Bearer ${Token.getToken(ACCESS_KEY)}`,
    };
  } else {
    window.location.href = "/login";
  }
  return config;
};

export default requestHandler;
