export const fileErrorHanlder = (status: number, message: string) => {
  if (status === 403) {
    return "동문인증이 필요합니다.";
  }
  if (status === 400) {
    if (message === "File is empty") {
      return "파일이 비어 있습니다.";
    }
  }
  return message;
};
