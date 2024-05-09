import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@src/assets/icons/Logo/logo.svg";
import search2 from "@src/assets/icons/Search/search2.svg";
import { HEADER_ITEMS } from "@src/constants/Header/header.constant";
import token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { useRecoilState } from "recoil";
import { SearchModalAtom, MyInfoModal } from "@src/stores/common/common.store";
import { SignInModalAtom } from "@src/stores/auth/auth.store";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import MyInfo from "../Modal/MyInfo";
import { Portal } from "@stubee2/stubee2-rolling-ui";
import SignIn from "../Auth/SignIn";
import Search from "../Modal/Search";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { Row } from "@src/styles/flex";

const Header = () => {
  const [searchModal, setSearchModal] =
    useRecoilState<boolean>(SearchModalAtom);
  const [myInfoModal, setMyInfoModal] = useRecoilState<boolean>(MyInfoModal);
  const [signInModal, setSignInModal] =
    useRecoilState<boolean>(SignInModalAtom);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isTemp = tokenDecode("access", "authority") === "TEMP";

  return (
    <>
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

          <Row $alignItems={"center"} $columnGap={"3px"}>
            <S.HoverIconContainer
              onClick={() => turnOnOffModal(setSearchModal, "on")}
            >
              <S.Search src={search2} alt="이미지 없음" />
            </S.HoverIconContainer>

            {token.getToken(ACCESS_TOKEN_KEY) ? (
              <S.HoverIconContainer
                onClick={() => turnOnOffModal(setMyInfoModal, "on")}
              >
                <S.UserIcon size={30} />
              </S.HoverIconContainer>
            ) : (
              <S.SignInText
                onClick={() => turnOnOffModal(setSignInModal, "on")}
              >
                <p>로그인</p>
              </S.SignInText>
            )}
          </Row>
        </S.HeaderWrapper>
      </S.HeaderContainer>

      <Portal id="modal">
        {myInfoModal && <MyInfo />}
        {signInModal && <SignIn />}
        {searchModal && <Search />}
      </Portal>
    </>
  );
};

export default Header;
