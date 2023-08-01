import * as S from "./style";
import useHideHeader from "../../../../hooks/Common/useHideHeader";
import loginLogo from "../../../../assets/Auth/loginLogo.svg";
import Form from "./Form";
import Social from "./Social";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  useHideHeader();
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginLogo
          src={loginLogo}
          onClick={() => navigate("/")}
          alt="이미지 없음"
        />
        <Form />
        <Social />
      </S.LoginWrapper>
    </S.LoginContainer>
  );
}
