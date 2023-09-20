import Token from "@src/libs/Token/Token";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

export const useLogout = () => {
  const { rollingToast } = useRollingToast();
  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      rollingToast("로그아웃 하셨습니다", "info");
      Token.clearToken();
      window.location.replace("/");
    }
  };

  return { handleLogout };
};
