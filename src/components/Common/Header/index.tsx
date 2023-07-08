import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import Search1 from "../../../assets/Search1.svg";
import { useState } from "react";
import { HEADER_ITEMS } from "../../../constants/Common/common.constant";
import token from "../../../libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../../../constants/Auth/auth.constant";
import { useGetMyInfoQuery } from "../../../queries/Member/Member.query";
import { useSetRecoilState } from "recoil";
import {
  SearchModal,
  SimpleInfoModal,
} from "../../../store/common/common.store";
import { MemberImgName } from "../../../store/member/member.store";

export default function Header() {
  const navigate = useNavigate();
  const setSearch = useSetRecoilState<boolean>(SearchModal);
  const setSimpleInfo = useSetRecoilState<boolean>(SimpleInfoModal);
  const setMemberImgName = useSetRecoilState(MemberImgName);
  const [select, setSelect] = useState<string>("홈 피드");
  const { data } = useGetMyInfoQuery();

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
                isSelect={select === item.name}
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
              onClick={() => {
                setSimpleInfo(true);
                setMemberImgName({
                  imageUrl: data?.socialDetails.imageUrl!!,
                  name: data?.socialDetails.name!!,
                });
              }}
            />
          ) : (
            <div onClick={() => navigate("/login")}>로그인</div>
          )}
        </S.LoginSearchContainer>
      </S.HeaderWrap>
    </S.Header>
  );
}
