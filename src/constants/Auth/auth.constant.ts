import github from "../../assets/github.svg";
import Google from "../../assets/Google.png";
import CONFIG from "../.././config/config.json";

export const ACCESS_KEY = "accessToken" as const;
export const REFRESH_KEY = "refreshToken" as const;
export const REQUEST_KEY = "Authorization" as const;
export const AUTH_ITEM = [
  {
    id: 0,
    isGoogle: false,
    text: "Github 로그인",
    loginUrl: `${CONFIG.SERVER}/oauth2/authorization/github`,
    loginImg: github,
  },
  {
    id: 1,
    isGoogle: true,
    text: "Google 로그인",
    loginUrl: "",
    loginImg: Google,
  },
] as const;
