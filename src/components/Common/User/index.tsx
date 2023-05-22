import { useGetMyInfo } from "../../../queries/User/user.query";
import * as S from "./style";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";
import Nav from "./Nav";
import useShowHeader from "../../../hooks/User/useShowHeader";
import Review from "./Company/Review";
import { useState } from "react";
import GroupingState from "../../../libs/Common/GroupingState";
import Profile from "./Profile";
import Regist from "./Company/Regist";

export default function User() {
  const { data: myInfo } = useGetMyInfo();
  const [selectId, setSelectId] = useState<number>(1);

  useTokenCheck();
  useShowHeader();
  return (
    <S.UserWrap>
      <S.UserContainer>
        <Nav
          selectIdObject={GroupingState("selectId", selectId, setSelectId)}
          name={myInfo?.member.name!!}
          email={myInfo?.member.email!!}
          logo={myInfo?.member.imageUrl!!}
        />
        <S.UserListContainer>
          {selectId === 1 && <Profile data={myInfo?.member!!} />}
          {selectId === 2 && <Regist data={myInfo?.companyList!!} />}
          {selectId === 3 && <Review data={myInfo?.reviewList!!} />}
        </S.UserListContainer>
      </S.UserContainer>
    </S.UserWrap>
  );
}
