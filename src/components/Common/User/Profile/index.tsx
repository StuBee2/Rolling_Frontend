import * as S from "./style";
import { MemberType } from "../../../../types/member.type";
import React from "react";
import Skill from "./Skill";
import MyInfo from "./MyInfo";

interface Props {
  myInfo: MemberType;
}

function Profile({ myInfo }: Props) {
  return (
    <>
      <S.ProfileContainer>
        <MyInfo data={myInfo} />
      </S.ProfileContainer>
      <S.ProfileContainer>
        <Skill />
      </S.ProfileContainer>
    </>
  );
}
export default React.memo(Profile);
