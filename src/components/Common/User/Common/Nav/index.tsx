import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../../../constants/User/user.constants";
import { useLogging } from "../../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../../constants/Log/log.constants";
import { useLogout } from "../../../../../hooks/Auth/useLogout";
import { useGetMyInfo } from "../../../../../queries/Member/Member.query";

export default function Nav() {
  const navigate = useNavigate();
  const { handleLoggingClick } = useLogging();
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const { data } = useGetMyInfo();

  return (
    <S.UserNavBar>
      <S.UserLogo onClick={() => navigate("/")}>Rolling</S.UserLogo>
      <S.UserAbleWrap>
        <S.UserProfileContainer>
          <S.UserImg src={data?.imageUrl} />
          <S.UserName>{data?.name}</S.UserName>
          <S.UserEmail>{data?.email}</S.UserEmail>
        </S.UserProfileContainer>
        <S.CenterDiv isLine={true}>
          <S.UserAble isSpaceEvenly={true}>
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
