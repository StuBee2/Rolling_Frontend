import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/Common/logo.svg";
import Search1 from "@src/assets/Search/Search1.svg";
import { useState } from "react";
import { HEADER_ITEMS } from "@src/constants/Common/common.constant";
import token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { useSetRecoilState } from "recoil";
import { IsCloseModalAtom, MyInfoModal } from "@src/stores/common/common.store";
import { useLogging } from "@src/hooks/Logging/useLogging";

export default function Header() {
  const navigate = useNavigate();
  const setIsCloseModal = useSetRecoilState<boolean>(IsCloseModalAtom);
  const setMyInfoModal = useSetRecoilState<boolean>(MyInfoModal);
  const [select, setSelect] = useState<string>("홈 피드");
  const { pathname } = useLocation();
  const {} = useLogging();

  const handlePageClick = (name: string, link: string) => {
    setSelect(name);
    navigate(link);
  };

  return (
    <S.Header>
      <S.HeaderWrap>
        <S.PageContainer>
          <img
            src={logo}
            onClick={() => handlePageClick("홈 피드", "/")}
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
          <S.Search
            src={Search1}
            onClick={() => {
              setIsCloseModal(true);
              document.body.style.overflow = "hidden";
            }}
            alt="이미지 없음"
          />
          {token.getToken(ACCESS_TOKEN_KEY) ? (
            <S.UserIcon
              size={30}
              onClick={() => {
                setMyInfoModal(true);
                document.body.style.overflow = "hidden";
              }}
            />
          ) : (
            <div onClick={() => navigate("/signin")}>로그인</div>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrap>
    </S.Header>
  );
}
