export const fileErrorHanlder = (status: number, message: string) => {
  if (status === 400) {
    if (message === "File is empty") {
      return "파일이 비어 있습니다.";
    }
  }
  return message;
};
