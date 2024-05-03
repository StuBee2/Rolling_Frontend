export const memberErrorHandler = (status: number, message: string) => {
  if (status === 403) {
    if (message === "Member certify failed") {
      return "회원인증을 실패하였습니다.";
    }
    if (message === "You are not the author/registrant") {
      return "저자/등록자가 아닙니다!";
    }
  }

  if (status === 404) {
    if (message === "Member not found") {
      return "회원정보를 찾지 못했습니다.";
    }
  }

  if (status === 409) {
    if (message === "Nickname is duplicated") {
      return "닉네임이 중복되었습니다.";
    }
  }

  if (status === 500) {
    return "서버에서 오류가 발생했어요!";
  }

  return message;
};
