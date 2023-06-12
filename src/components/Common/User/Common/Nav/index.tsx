import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../../../constants/User/user.constants";
import { useLogging } from "../../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../../constants/Log/log.constants";
import { useLogout } from "../../../../../hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "../../../../../queries/Member/Member.query";
import { MemberType } from "../../../../../types/member.type";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setMyInfo: Dispatch<SetStateAction<MemberType | null>>;
}

export default function Nav({ setMyInfo }: Props) {
  const navigate = useNavigate();
  const { handleLoggingClick } = useLogging();
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const { data } = useGetMyInfoQuery();

  useEffect(() => {
    setMyInfo(data!!);
  }, [data]);

  return (
    <S.UserNavBar>
      <S.UserLogo onClick={() => navigate("/")}>Rolling</S.UserLogo>
      <S.UserAbleWrap>
        <S.UserProfileContainer>
          <S.UserImg src={data?.socialDetails.imageUrl} />
          <S.UserName>{data?.socialDetails.name}</S.UserName>
          <S.UserEmail>{data?.socialDetails.email}</S.UserEmail>
        </S.UserProfileContainer>
        <S.CenterDiv line={true}>
          <S.UserAble spaceEvenly={true}>
            {USER_ITEMS.map((user) => (
              <S.UserCategory
                key={user.id}
                isSelect={user.link === pathname}
                onClick={() => navigate(user.link)}
              >
                {user.title}
              </S.UserCategory>
            ))}
          </S.UserAble>
        </S.CenterDiv>
        <S.CenterDiv>
          <S.UserAble>
            <div onClick={() => handleLoggingClick(LOG_ITEM[2])}>
              기업 등록하기
            </div>
            <div onClick={handleLogout}>로그아웃</div>
          </S.UserAble>
        </S.CenterDiv>
      </S.UserAbleWrap>
    </S.UserNavBar>
  );
}
