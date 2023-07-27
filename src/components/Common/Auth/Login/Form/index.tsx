import { useLogin } from "../../../../../hooks/Auth/useLogin";
import * as S from "./style";
import idImg from "../../../../../assets/Auth/idImg.svg";
import pwImg from "../../../../../assets/Auth/pwImg.svg";

export default function Form() {
  const { handleChange, handleSubmit, id, pw } = useLogin();
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormBox>
        <S.Title>로그인</S.Title>
        <S.InputContainer>
          <S.LoginImg>
            <img src={idImg} alt="이미지 없음" />
          </S.LoginImg>
          <S.Input
            type="text"
            value={id}
            name="id"
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.LoginImg>
            <img src={pwImg} alt="이미지 없음" />
          </S.LoginImg>
          <S.Input
            type="password"
            value={pw}
            name="pw"
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </S.InputContainer>

        <S.SubRole>
          <li>회원가입</li>
          <p>|</p>
          <li>아이디 찾기 </li>
          <p>|</p>
          <li>비밀번호 찾기</li>
        </S.SubRole>
      </S.FormBox>

      <S.SubmitBtn type="submit">Sign In</S.SubmitBtn>
    </S.Form>
  );
}
