import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@src/assets/icons/Logo/logo.png";
import search2 from "@src/assets/icons/Search/search2.png";
import { HEADER_ITEMS } from "@src/constants/Header/header.constant";
import token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { useSetRecoilState } from "recoil";
import { IsCloseModalAtom, MyInfoModal } from "@src/stores/common/common.store";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";
import { SignInModalAtom } from "@src/stores/auth/auth.store";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";

export default function Header() {
  const setIsCloseModal = useSetRecoilState<boolean>(IsCloseModalAtom);
  const setMyInfoModal = useSetRecoilState<boolean>(MyInfoModal);
  const setSignInModal = useSetRecoilState<boolean>(SignInModalAtom);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isTemp = tokenDecode("access", "authority") === "TEMP";

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.PageContainer>
          <img
            src={logo}
            onClick={() => (window.location.href = "/")}
            alt="이미지 없음"
          />
          <ul>
            {HEADER_ITEMS.map((item) => {
              const handleClick = () => {
                if (item.name === "스토리 등록" && isTemp) {
                  navigate("/alumni/certify");
                } else {
                  navigate(item.link);
                }
              };
              const isCertify = item.name === "스토리 등록" && isTemp;

              return (
                <S.PageList
                  key={item.id}
                  onClick={handleClick}
                  isSelect={
                    item.link === pathname || pathname === "/alumni/certify"
                  }
                >
                  {isCertify ? "동문인증" : item.name}
                  {isCertify && <span>*</span>}
                </S.PageList>
              );
            })}
          </ul>
        </S.PageContainer>

        <S.LoginSearchContainer>
          <S.HoverIconContainer onClick={() => turnOnModal(setIsCloseModal)}>
            <S.Search src={search2} alt="이미지 없음" />
          </S.HoverIconContainer>

          {token.getToken(ACCESS_TOKEN_KEY) ? (
            <S.HoverIconContainer onClick={() => turnOnModal(setMyInfoModal)}>
              <S.UserIcon size={30} />
            </S.HoverIconContainer>
          ) : (
            <S.SignInText onClick={() => turnOnModal(setSignInModal)}>
              <p>로그인</p>
            </S.SignInText>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
