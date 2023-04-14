import * as S from "./style";
import google from "../../../../assets/google.svg";
import github from "../../../../assets/github.svg";
import CONFIG from "../../../.././config/config.json";
export default function Login() {
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${CONFIG.ClientId}&redirect_uri=${window.location.origin}/callback`;
  return (
    <S.LoginContainer>
      <S.LoginBox>
        <S.Logo />
        <div>
          <S.LoginBtn
            isGoogle={false}
            onClick={() => (window.location.href = githubURL)}
          >
            <img src={github} alt="" />
            <span>GitHub 계정으로 로그인</span>
          </S.LoginBtn>
          
          <S.LoginBtn isGoogle={true}>
            <img src={google} alt="" />
            <span>Google 계정으로 로그인</span>
          </S.LoginBtn>
        </div>
      </S.LoginBox>
    </S.LoginContainer>
  );
}
