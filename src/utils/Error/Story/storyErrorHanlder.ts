export const storyErrorHanlder = (status: number, message: string) => {
  if (status === 401) {
    return "리뷰를 등록하지 못했습니다.";
  }

  if (status === 403) {
    return "권한이 없습니다.";
  }

  if (status === 404) {
    if (message === "Story not found") {
      return "리뷰를 찾지 못했습니다.";
    }
  }

  if (status === 500) {
    return "서버에서 오류가 발생했어요!";
  }

  return message;
};
