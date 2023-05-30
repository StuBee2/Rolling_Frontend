import * as S from "./style";
import { AUTH_ITEM } from "../../../../constants/Auth/auth.constant";
import useShowHeader from "../../../../hooks/User/useShowHeader";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../../hooks/Auth/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, id, pw } = useLogin();
  useShowHeader();

  return (
    <S.LoginWrap>
      <S.LoginBox>
        <S.AbleContainer isLoginText={false}>
          <S.Text isLogo={true} onClick={() => navigate("/")}>
            Rolling
          </S.Text>
        </S.AbleContainer>
        <S.AbleContainer isLoginText={true}>
          <S.Text>로그인</S.Text>
          <S.LoginContainer isSocial={true}>
            <>
              {AUTH_ITEM.map((item) => (
                <S.LoginBtn
                  key={item.id}
                  isGoogle={item.isGoogle}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    window.location.href = item.loginUrl;
                  }}
                >
                  <img src={item.loginImg} alt="" />
                  <div>{item.text}</div>
                </S.LoginBtn>
              ))}
            </>
          </S.LoginContainer>
          <S.LoginContainer onSubmit={handleSubmit}>
            <input
              placeholder="아이디"
              type="text"
              value={id}
              onChange={handleChange}
              name="id"
            />
            <input
              placeholder="비밀번호"
              type="password"
              value={pw}
              onChange={handleChange}
              name="pw"
            />
            <button type="submit">로그인</button>
          </S.LoginContainer>
          <S.SuggestSignUpContainer>
            <div>
              회원이 아니신가요?{" "}
              <span onClick={() => navigate("/signup")}>회원가입</span>
            </div>
          </S.SuggestSignUpContainer>
        </S.AbleContainer>
      </S.LoginBox>
    </S.LoginWrap>
  );
}
