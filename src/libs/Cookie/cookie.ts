import cookie from "js-cookie";

class Cookie {
  public getCookie(key: string): string | undefined | null {
    let item = undefined;
    if (localStorage.getItem(key) !== undefined) {
      item = localStorage.getItem(key);
    }
    return item;
  }

  public setCookie(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeCookie(key: string): void {
    localStorage.removeItem(key);
  }
}

export default new Cookie();
