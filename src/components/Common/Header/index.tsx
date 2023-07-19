import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import Search1 from "../../../assets/Search1.svg";
import { useEffect, useState } from "react";
import { HEADER_ITEMS } from "../../../constants/Common/common.constant";
import token from "../../../libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../../../constants/Auth/auth.constant";
import { useGetMyInfoQuery } from "../../../queries/Member/Member.query";
import { useSetRecoilState } from "recoil";
import {
  SearchModal,
  SimpleInfoModal,
} from "../../../stores/common/common.store";
import { MyMemberInfo } from "../../../stores/member/member.store";

export default function Header() {
  const navigate = useNavigate();
  const setSearch = useSetRecoilState<boolean>(SearchModal);
  const setSimpleInfo = useSetRecoilState<boolean>(SimpleInfoModal);
  const setMyMemberInfo = useSetRecoilState(MyMemberInfo);
  const [select, setSelect] = useState<string>("홈 피드");
  const { pathname } = useLocation();
  const { data } = useGetMyInfoQuery();

  const handlePageClick = (name: string, link: string) => {
    setSelect(name);
    navigate(link);
  };

  useEffect(() => {
    setMyMemberInfo(data!!);
  }, [data]);

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
          <S.Search src={Search1} onClick={() => setSearch(true)} />
          {token.getToken(ACCESS_TOKEN_KEY) ? (
            <S.ProfileImg
              src={data?.socialDetails.imageUrl}
              onClick={() => setSimpleInfo(true)}
            />
          ) : (
            <div onClick={() => navigate("/login")}>로그인</div>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrap>
    </S.Header>
  );
}
