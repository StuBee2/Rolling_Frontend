import * as S from "./style";
import github from "../../../../../assets/Auth/github.svg";
import CONFIG from "../../../../../config/config.json";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../../../hooks/Auth/useLogin";

export default function SignInItem() {
  const gitSignInUrl = `${CONFIG.SERVER}/oauth2/authorization/github`;
  const navigate = useNavigate();
  const { handleChange, handleSubmit, id, pw } = useLogin();
  return (
    <S.SignInItemForm onSubmit={handleSubmit}>
      <div>
        <S.SubTitle>취업을 위한 모든 정보가 모인 곳</S.SubTitle>
        <S.Title onClick={() => navigate("/")}>Rolling</S.Title>
      </div>
      <S.SignInBox>
        <div>
          <p>ID</p>
          <input
            value={id}
            placeholder="아이디를 입력해주세요"
            type="text"
            name="id"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            value={pw}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="pw"
            onChange={handleChange}
          />
        </div>
        <ul>
          <li>회원가입</li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
        <button type="submit">Sign In</button>
      </S.SignInBox>
      <S.SocailSignInBtn
        onClick={(e) => {
          e.preventDefault();
          window.location.href = gitSignInUrl;
        }}
      >
        <img src={github} alt="이미지 없음" />
        <p>Github 간편 로그인</p>
      </S.SocailSignInBtn>
    </S.SignInItemForm>
  );
}
