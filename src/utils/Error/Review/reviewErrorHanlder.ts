export const reviewErrorHanlder = (status: number, message: string) => {
  if (status === 401) {
    return "리뷰를 등록하지 못했습니다.";
  }

  if (status === 404) {
    if (message === "Review not found") {
      return "리뷰를 찾지 못했습니다.";
    }
  }
  return message;
};
