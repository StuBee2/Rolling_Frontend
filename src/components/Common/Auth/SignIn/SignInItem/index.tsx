import * as S from "./style";
import github from "@src/assets/Auth/github.svg";
import CONFIG from "@src/config/config.json";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@src/hooks/Auth/useLogin";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";

export default function SignInItem() {
  const gitSignInUrl = `${CONFIG.SERVER}/oauth2/authorization/github`;
  const navigate = useNavigate();
  const { handleSubmit, credentials, handleChange } = useLogin();
  return (
    <S.SignInItemForm onSubmit={handleSubmit}>
      <div>
        <S.SubTitle>취업을 위한 모든 정보가 모인 곳</S.SubTitle>
        <S.Title onClick={() => navigate("/")}>Rolling</S.Title>
      </div>
      <S.SignInBox>
        <div>
          <S.IdPwText>ID</S.IdPwText>
          <TextInput
            value={credentials.id}
            placeholder="아이디를 입력해주세요"
            type="text"
            name="id"
            textType="input"
            customStyle={S.InputStyle}
            handleChange={handleChange}
          />
        </div>
        <div>
          <S.IdPwText>Password</S.IdPwText>
          <TextInput
            value={credentials.pw}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="pw"
            textType="input"
            customStyle={S.InputStyle}
            handleChange={handleChange}
          />
        </div>
        <ul>
          <li>회원가입</li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
        <Button ButtonType="default" type="submit">
          Sign In
        </Button>
      </S.SignInBox>

      <Button
        ButtonType="github"
        onClick={(e) => {
          e?.preventDefault();
          window.location.href = gitSignInUrl;
        }}
      >
        <img src={github} alt="이미지 없음" />
        <p>Github 간편 로그인</p>
      </Button>
    </S.SignInItemForm>
  );
}
