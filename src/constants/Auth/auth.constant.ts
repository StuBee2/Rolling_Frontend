import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import CONFIG from "../.././config/config.json";

export const ACCESS_KEY = "accessToken" as const;
export const REFRESH_KEY = "refreshToken" as const;
export const REQUEST_KEY = "Authorization" as const;
export const AUTH_ITEM = [
  {
    isGoogle: false,
    text: "GitHub 계정으로 로그인",
    loginUrl: `${CONFIG.SERVER}/oauth2/authorization/github`,
    loginProfile: github,
  },
] as const;
