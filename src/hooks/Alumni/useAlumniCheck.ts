import { useEffect } from "react";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { useNavigate } from "react-router-dom";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";

const useAlumniCheck = () => {
  const navigate = useNavigate();
  const { rollingToast } = useRollingToast();
  const memberRole = tokenDecode("access", "authority");

  useEffect(() => {
    const checkAlumni = () => {
      if (Token.getToken(ACCESS_TOKEN_KEY) && memberRole === "TEMP") {
        rollingToast("동문 인증이 필요합니다.", "warning");
        navigate(-1);
      }
    };
    checkAlumni();
  }, [navigate]);
};

export default useAlumniCheck;
