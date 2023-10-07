import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@src/assets/images/Common/Logo.svg";
import Search1 from "@src/assets/images/Search/Search1.svg";
import { useState } from "react";
import { HEADER_ITEMS } from "@src/constants/Header/header.constant";
import token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { useSetRecoilState } from "recoil";
import { IsCloseModalAtom, MyInfoModal } from "@src/stores/common/common.store";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";

export default function Header() {
  const navigate = useNavigate();
  const setIsCloseModal = useSetRecoilState<boolean>(IsCloseModalAtom);
  const setMyInfoModal = useSetRecoilState<boolean>(MyInfoModal);
  const [select, setSelect] = useState<string>("홈 피드");
  const { pathname } = useLocation();

  const handlePageClick = (name: string, link: string) => {
    setSelect(name);
    window.location.href = link;
  };

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
            {HEADER_ITEMS.map((item) => (
              <S.PageList
                key={item.id}
                onClick={() => handlePageClick(item.name, item.link)}
                isSelect={item.link === pathname}
              >
                {item.name}
              </S.PageList>
            ))}
          </ul>
        </S.PageContainer>

        <S.LoginSearchContainer>
          <S.HoverIconContainer onClick={() => turnOnModal(setIsCloseModal)}>
            <S.Search src={Search1} alt="이미지 없음" />
          </S.HoverIconContainer>
          {token.getToken(ACCESS_TOKEN_KEY) ? (
            <S.HoverIconContainer onClick={() => turnOnModal(setMyInfoModal)}>
              <S.UserIcon size={30} />
            </S.HoverIconContainer>
          ) : (
            <S.SignInText onClick={() => navigate("/signin")}>
              <p>로그인</p>
            </S.SignInText>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
