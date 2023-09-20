export const authErrorHandler = (status: number, message: string) => {
  if (status === 400) {
    if (message === "Jwt is malformed") {
      return "토큰 형태가 알맞지 않습니다.";
    }
    if (message === "Jwt is unsupported") {
      return "지원하지 않는 토큰입니다.";
    }
  }
  if (status === 401) {
    if (message === "Jwt is expired") {
      return "토큰이 만료되었습니다.";
    }
  }
  return message;
};
