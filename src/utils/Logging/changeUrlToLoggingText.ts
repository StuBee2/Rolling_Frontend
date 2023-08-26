export const changeUrlToLoggingText = (url: string) => {
  switch (url) {
    case "/":
      return "메인";
    case "/signin":
      return "로그인";
    case "/mypage/profile":
      return "마이페이지의 내정보페이지";
    case "/mypage/employment":
      return "마이페이지의 고용관계페이지";
    case "/mypage/review":
      return "마이페이지의 리뷰페이지";
    default:
      return "";
  }
};
