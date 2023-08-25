import Token from "@src/libs/Token/Token";
import { useToastAlert } from "../Common/useToastAlert";

export const useLogout = () => {
  const { toastAlert } = useToastAlert();
  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      toastAlert("로그아웃 하셨습니다", "info");
      Token.clearToken();
      window.location.replace("/");
    }
  };

  return { handleLogout };
};
