import CONFIG from "@src/config/config.json";

export const ACCESS_TOKEN_KEY = "accessToken" as const;
export const REFRESH_TOKEN_KEY = "refreshToken" as const;
export const REQUEST_TOKEN_KEY = "Authorization" as const;
export const REQUEST_REFRESH_TOKEN_KEY = "Refresh-Token" as const;

export const SIGNIN_OPTIONS_ITEMS = [
  "회원가입",
  "아이디 찾기",
  "비밀번호 찾기",
] as const;

export const gitSignInUrl = `${CONFIG.SERVER}/oauth2/authorization/github`;
