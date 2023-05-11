import { useEffect } from "react";

import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";
import { useNavigate } from "react-router-dom";

const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Token.getToken(ACCESS_KEY) || !Token.getToken(REFRESH_KEY)) {
      window.alert("토큰이 없습니다");
      navigate("/");
    }
  }, [navigate]);

  return {};
};

export default useTokenCheck;
