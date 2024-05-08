export const fileErrorHanlder = (status: number, message: string) => {
  if (status === 403) {
    return "동문인증이 필요합니다.";
  }

  if (status === 400) {
    if (message === "File is empty") {
      return "파일이 비어 있습니다.";
    }
  }

  if (status === 500) {
    return "서버에서 오류가 발생했어요!";
  }

  return message;
};
