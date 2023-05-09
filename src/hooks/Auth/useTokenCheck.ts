import { ACCESS_KEY } from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";

export function useTokenCheck() {
  const token = Token.getToken(ACCESS_KEY);
  return token;
}
