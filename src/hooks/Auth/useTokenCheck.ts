import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { useNavigate } from "react-router-dom";

const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkTokens = () => {
      if (
        !Token.getToken(ACCESS_TOKEN_KEY) ||
        !Token.getToken(REFRESH_TOKEN_KEY)
      ) {
        navigate("/");
      }
    };
    checkTokens();
  }, [navigate]);
};

export default useTokenCheck;
