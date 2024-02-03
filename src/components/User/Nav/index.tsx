import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "@src/constants/User/user.constants";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { MyMemberInfo } from "@src/stores/member/member.store";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import emptyFace from "@src/assets/icons/Home/emptyFace.svg";
import { useGetMyInfoQuery } from "@src/services/Member/queries";

interface Props {
  pathName: string;
}

export default function Nav({ pathName }: Props) {
  const { handleLogout } = useLogout();
  const { data: myInfo } = useGetMyInfoQuery({ suspense: true });
  const setMyMemberInfo = useSetRecoilState(MyMemberInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setMyMemberInfo(myInfo!!);
  }, [myInfo]);

  const handleSetUpEmailClick = () => {
    window.location.href = "https://github.com/settings/profile";
  };

  return (
    <S.UserNavBar>
      <S.UserInfoContainer>
        <S.UserImg src={myInfo?.details.imageUrl} />
        <S.UserName>{myInfo?.details.name}</S.UserName>
        <S.UserEmail
          email={myInfo?.details.email!!}
          onClick={() => !myInfo?.details.email && handleSetUpEmailClick()}
        >
          {myInfo?.details.email || "이메일 설정하러 가기"}
        </S.UserEmail>
      </S.UserInfoContainer>

      <S.PageSelectContainer>
        <S.PageSelectWrapper>
          {USER_ITEMS.map((item) => (
            <S.PageSelectItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isSelect={pathName === item.link}
            >
              <img src={item.image} alt="이미지 없음" />
              <p>{item.title}</p>
            </S.PageSelectItem>
          ))}
        </S.PageSelectWrapper>
        <S.PageSelectItem onClick={handleLogout}>
          <img src={emptyFace} alt="이미지 없음" />
          <p>로그아웃</p>
        </S.PageSelectItem>
      </S.PageSelectContainer>
    </S.UserNavBar>
  );
}
