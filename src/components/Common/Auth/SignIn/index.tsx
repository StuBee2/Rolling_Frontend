import useHideHeader from "@src/hooks/Header/useHideHeader";
import * as S from "./style";
import rollingImg from "@src/assets/Auth/rollingImg.svg";
import SignInItem from "./SignInItem/index";

export default function SignIn() {
  useHideHeader();
  return (
    <S.SignInContainer>
      <S.SignInWrapper>
        <S.SignInItemContainer>
          <SignInItem />
        </S.SignInItemContainer>

        <S.SignInSideBackground>
          <img src={rollingImg} alt="이미지 없음" />
        </S.SignInSideBackground>
      </S.SignInWrapper>
    </S.SignInContainer>
  );
}
