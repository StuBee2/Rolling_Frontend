import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";
import { useNavigate } from "react-router-dom";

const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkTokens = () => {
      if (
        !Token.getToken(ACCESS_TOKEN_KEY) ||
        !Token.getToken(REFRESH_TOKEN_KEY)
      ) {
        window.alert("토큰이 없습니다");
        navigate("/");
      }
    };
    checkTokens();
  }, [navigate]);
};

export default useTokenCheck;
