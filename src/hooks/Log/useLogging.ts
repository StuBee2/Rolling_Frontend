import Token from "../../libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../../constants/Auth/auth.constant";
import { usePostLogMutation } from "../../queries/Log/Log.query";
import { useNavigate } from "react-router-dom";
import { LoggingParam } from "../../repositories/Logging/log.repository";

export function useLogging() {
  const navigate = useNavigate();
  const postLogging = usePostLogMutation();
  const handleLoggingClick = async ({
    description,
    module,
    page,
  }: LoggingParam) => {
    if (!Token.getToken(ACCESS_TOKEN_KEY)) {
      window.alert("토큰이 없습니다! 다시 로그인해주세요!");
      Token.clearToken();
      navigate("/signin");
      return;
    }
    postLogging.mutateAsync(
      { description, module },
      {
        onSuccess: () => {
          navigate(`${page}`);
        },
        onError: () => {
          window.alert("알맞지 않는 토큰이 입니다. 다시 로그인해주세요!");
          Token.clearToken();
          navigate("/signin");
        },
      }
    );
  };

  return { handleLoggingClick };
}
