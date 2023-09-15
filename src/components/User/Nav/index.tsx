import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "@src/constants/User/user.constants";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import { MyMemberInfo } from "@src/stores/member/member.store";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import logout from "@src/assets/Auth/logout.svg";

export default function Nav() {
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const { data: myInfo } = useGetMyInfoQuery({ suspense: true });
  const setMyMemberInfo = useSetRecoilState(MyMemberInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setMyMemberInfo(myInfo!!);
  }, [myInfo]);

  return (
    <S.UserNavBar>
      <S.MemberInfoContainer>
        <S.UserImg src={myInfo?.socialDetails.imageUrl} />
        <S.UserName>{myInfo?.socialDetails.name}</S.UserName>
        <S.UserEmail>{myInfo?.socialDetails.email}</S.UserEmail>
      </S.MemberInfoContainer>

      <S.PageSelectContainer>
        <S.PageSelect>
          {USER_ITEMS.map((item) => (
            <S.PageSelectItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isSelect={pathname === item.link}
            >
              <img src={item.image} alt="이미지 없음" />
              <p>{item.title}</p>
            </S.PageSelectItem>
          ))}
        </S.PageSelect>
        <S.Logout onClick={handleLogout}>
          <img src={logout} alt="이미지 없음" />
          <p>로그아웃</p>
        </S.Logout>
      </S.PageSelectContainer>
    </S.UserNavBar>
  );
}
