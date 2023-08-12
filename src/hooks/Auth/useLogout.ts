import { useNavigate } from "react-router-dom";
import Token from "@src/libs/Token/Token";

export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      Token.clearToken();
      navigate("/");
    }
  };

  return { handleLogout };
};
