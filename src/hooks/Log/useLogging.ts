import Token from "../../libs/Token/Token";
import { ACCESS_KEY } from "../../constants/Auth/auth.constant";
import { usePostLogMutation } from "../../queries/Log/Log.query";
import { LoggingParam } from "../../repositories/Logging/log.param";
import { useNavigate } from "react-router-dom";

export function useLogging() {
  const navigate = useNavigate();
  const postLogging = usePostLogMutation();
  const handleLoggingClick = async ({
    description,
    module,
    page,
  }: LoggingParam) => {
    if (Token.getToken(ACCESS_KEY)) {
      postLogging.mutateAsync(
        { description, module },
        {
          onSuccess: () => {
            navigate(`${page}`);
          },
          onError: (err) => {
            console.log(err);
            window.alert("알맞지 않는 토큰이 입니다. 다시 로그인해주세요!");
            Token.clearToken();
            navigate("/login");
          },
        }
      );
    } else {
      window.alert("토큰이 없습니다! 다시 로그인해주세요!");
      Token.clearToken();
      navigate("/login");
    }
  };

  return { handleLoggingClick };
}
