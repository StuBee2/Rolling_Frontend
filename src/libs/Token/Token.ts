import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import cookie from "../Cookie/cookie";

interface Storage {
  getToken(key: string): string | undefined;
  setToken(key: string, value: string): void;
  clearToken(): void;
}

class Token implements Storage {
  public getToken(key: string): string | undefined {
    return cookie.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
