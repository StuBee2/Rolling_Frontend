class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public removeToken(key: string): void {
    localStorage.removeItem(key);
  };

  public clearToken() {
    localStorage.clear();
  }
}

export default new Token();
