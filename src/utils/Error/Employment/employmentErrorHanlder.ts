export const employmentErrorHanlder = (status: number, message: string) => {
  if (status === 400) {
    if (message === "Employment already exists") {
      return "회사와 이미 고용관계입니다.";
    }
  }

  if (status === 404) {
    if (message === "Employment not found") {
      return "고용을 찾을 수 없습니다.";
    }
  }

  if (status === 500) {
    return "서버에서 오류가 발생했어요!";
  }

  return message;
};
