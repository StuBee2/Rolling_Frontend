import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { useNavigate } from "react-router-dom";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

const useTokenCheck = () => {
  const navigate = useNavigate();
  const { rollingToast } = useRollingToast();
  useEffect(() => {
    const checkTokens = () => {
      if (
        !Token.getToken(ACCESS_TOKEN_KEY) ||
        !Token.getToken(REFRESH_TOKEN_KEY)
      ) {
        rollingToast("로그인이 필요한 기능입니다.", "warning");
        navigate("/");
      }
    };
    checkTokens();
  }, [navigate]);
};

export default useTokenCheck;
