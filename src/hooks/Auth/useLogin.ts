import { useEffect } from "react";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export function useLogin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { accessToken, refreshToken } = queryString.parse(search);

  useEffect(() => {
    if (accessToken && refreshToken) {
      Token.setToken(ACCESS_KEY, accessToken.toString());
      Token.setToken(REFRESH_KEY, refreshToken.toString());
      navigate("/");
      window.location.replace("/");
    }
  }, [accessToken, refreshToken, navigate]);
}
