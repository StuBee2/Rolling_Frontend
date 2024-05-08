export const companyErrorHanlder = (status: number, message: string) => {
  if (status === 404) {
    if (message === "Company not found") {
      return "회사를 찾지 못했습니다.";
    }
  }

  if (status === 409) {
    if (message === "Company name is duplicated") {
      return "회사이름이 중복되었습니다.";
    }
  }

  if (status === 500) {
    return "서버에서 오류가 발생했어요!";
  }

  return message;
};
