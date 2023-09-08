import Token from "@src/libs/Token/Token";

export const useLogout = () => {
  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      window.alert("로그아웃 하셨습니다");
      Token.clearToken();
      window.location.replace("/");
    }
  };

  return { handleLogout };
};
