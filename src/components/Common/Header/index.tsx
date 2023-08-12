import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@src/assets/Common/Logo.svg";
import Search1 from "@src/assets/Search/Search1.svg";
import { useState } from "react";
import { HEADER_ITEMS } from "@src/constants/Common/common.constant";
import token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { useSetRecoilState } from "recoil";
import { SearchModal, SimpleInfoModal } from "@src/stores/common/common.store";

export default function Header() {
  const navigate = useNavigate();
  const setSearch = useSetRecoilState<boolean>(SearchModal);
  const setSimpleInfo = useSetRecoilState<boolean>(SimpleInfoModal);
  const [select, setSelect] = useState<string>("홈 피드");
  const { pathname } = useLocation();

  const handlePageClick = (name: string, link: string) => {
    setSelect(name);
    navigate(link);
  };

  return (
    <S.Header>
      <S.HeaderWrap>
        <S.PageContainer>
          <img
            src={Logo}
            onClick={() => {
              handlePageClick("홈 피드", "/");
            }}
            alt=""
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
          <S.Search
            src={Search1}
            onClick={() => setSearch(true)}
            alt="이미지 없음"
          />
          {token.getToken(ACCESS_TOKEN_KEY) ? (
            <S.UserIcon size={30} onClick={() => setSimpleInfo(true)} />
          ) : (
            <div onClick={() => navigate("/signin")}>로그인</div>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrap>
    </S.Header>
  );
}
