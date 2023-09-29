import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { DecodeType } from "@src/types/Auth/auth.type";
import jwtDecode from "jwt-decode";

export const jwtDecodeMemberId = () => {
  const accessToken = Token.getToken(ACCESS_TOKEN_KEY);
  if (accessToken) {
    return jwtDecode<DecodeType>(accessToken).sub;
  }
  return;
};
