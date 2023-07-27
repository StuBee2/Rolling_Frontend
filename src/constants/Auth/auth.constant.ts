import github from "../../assets/Auth/github.svg";
import Google from "../../assets/Auth/google.png";
import CONFIG from "../.././config/config.json";

export const ACCESS_TOKEN_KEY = "accessToken" as const;
export const REFRESH_TOKEN_KEY = "refreshToken" as const;
export const REQUEST_TOKEN_KEY = "Authorization" as const;
export const REQUEST_REFRESH_TOKEN_KEY = "Refresh-Token" as const;
export const AUTH_ITEM = [
  {
    id: 0,
    customStyle: {
      backgroundColor: "#000000",
      color: "#ffffff",
    },
    text: "Github 간편 로그인",
    loginUrl: `${CONFIG.SERVER}/oauth2/authorization/github`,
    loginImg: github,
  },
  {
    id: 1,
    customStyle: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    text: "Google 간편 로그인",
    loginUrl: "",
    loginImg: Google,
  },
] as const;
