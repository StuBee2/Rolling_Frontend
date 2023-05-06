import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Token from "../../libs/Token/Token";

export function useLogin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  useEffect(() => {
    Token.setToken("accessToken", params.get("accessToken")?.toString()!!);
    Token.setToken("refreshToken", params.get("refreshToken")?.toString()!!);

    navigate("/");
  }, [params]);
}
