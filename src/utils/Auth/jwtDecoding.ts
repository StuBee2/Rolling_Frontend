import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { DecodeKeyType, DecodeType } from "@src/types/Auth/auth.type";
import jwtDecode from "jwt-decode";

export const jwtDecoding = (option: DecodeKeyType) => {
  const accessToken = Token.getToken(ACCESS_TOKEN_KEY);
  if (accessToken) {
    return jwtDecode<DecodeType>(accessToken)[option];
  }
  return;
};
