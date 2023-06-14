import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export function useSocialLogin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { accessToken, refreshToken } = queryString.parse(search);

  useEffect(() => {
    if (accessToken && refreshToken) {
      Token.setToken(ACCESS_TOKEN_KEY, accessToken.toString());
      Token.setToken(REFRESH_TOKEN_KEY, refreshToken.toString());
      navigate("/");
      window.location.replace("/");
    }
  }, [accessToken, refreshToken, navigate]);
}
