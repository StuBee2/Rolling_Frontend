import google from "../../assets/google.svg";
import github from "../../assets/github.svg";

export const ACCESS_KEY = "accessToken" as const;
export const REFRESH_KEY = "refreshToken" as const;
export const REQUEST_KEY = "Authorization" as const;

export const AUTH_ITEM = [
  {
    isGoogle: false,
    text: "GitHub 계정으로 로그인",
    loginUrl: "",
    loginProfile: github,
  },
  {
    isGoogle: true,
    text: "Google 계정으로 로그인",
    loginUrl: "",
    loginProfile: google,
  },
] as const;
