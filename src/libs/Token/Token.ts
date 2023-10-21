import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import cookie from "../Cookie/cookie";

interface Storage {
  getToken(key: string): string | undefined | null;
  setToken(key: string, value: string): void;
  clearToken(): void;
  removeToken(key: string): void;
}

class Token implements Storage {
  public getToken(key: string): string | undefined | null {
    return cookie.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }

  public removeToken(key: string) {
    cookie.removeCookie(key);
  }
}

export default new Token();
