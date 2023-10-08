import * as S from "./style";
import rollingImg from "@src/assets/images/Auth/rollingImg.svg";
import SignInItem from "./SignInItem/index";
import useHideHeader from "@src/hooks/Header/useHideHeader";

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
