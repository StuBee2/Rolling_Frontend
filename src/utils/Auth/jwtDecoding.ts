import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { DecodeKeyType, DecodeType } from "@src/types/Auth/auth.type";
import jwtDecode from "jwt-decode";

export const jwtDecoding = (
  tokenType: "access" | "refresh",
  option: DecodeKeyType
) => {
  const token =
    tokenType === "access"
      ? Token.getToken(ACCESS_TOKEN_KEY)
      : Token.getToken(REFRESH_TOKEN_KEY);

  if (token) {
    return jwtDecode<DecodeType>(token)[option];
  }
  return;
};
