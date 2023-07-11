import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../../constants/User/user.constants";
import { useLogging } from "../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../constants/Log/log.constants";
import { useLogout } from "../../../../hooks/Auth/useLogout";
import { useRecoilValue } from "recoil";
import { MyMemberInfo } from "../../../../store/member/member.store";

export default function Nav() {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const myMemberInfo = useRecoilValue(MyMemberInfo);

  return (
    <S.UserNavBar>
      <S.MemberInfoContainer>
        <S.UserImg src={myMemberInfo?.socialDetails.imageUrl} />
        <S.UserName>{myMemberInfo?.socialDetails.name}</S.UserName>
        <S.UserEmail>{myMemberInfo?.socialDetails.email}</S.UserEmail>
      </S.MemberInfoContainer>
      <S.PageSelectContainer>
        <S.PageSelect>
          {USER_ITEMS.map((item) => (
            <S.PageSelectItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isSelect={pathname === item.link}
            >
              {item.title}
            </S.PageSelectItem>
          ))}
        </S.PageSelect>
        <S.Logout onClick={handleLogout}>🫥 로그아웃</S.Logout>
      </S.PageSelectContainer>
    </S.UserNavBar>
  );
}
