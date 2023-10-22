import cookie from "js-cookie";

class Cookie {
  public getCookie(key: string): string | undefined {
    let item = undefined;
    if (cookie.get(key) !== undefined) {
      item = cookie.get(key);
    }
    return item;
  }

  public setCookie(key: string, value: string, expire?: Date): void {
    cookie.set(key, value, { expires: expire });
  }

  public removeCookie(key: string): void {
    cookie.remove(key);
  }
}

export default new Cookie();
