import React from "react";
import * as S from "../style";
import { MemberType } from "../../../../../types/member.type";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  data: MemberType;
}

function MyInfo({ data }: Props) {
  return (
    <>
      <S.MyInfoTitle>기본 정보</S.MyInfoTitle>
      <S.CenterWrap>
        <S.MyInfo top={"80px"}>
          <div style={{ display: "flex" }}>
            <S.ProfileImg src={data?.socialDetails.imageUrl} alt="" />
            <S.ProfileAbleBox>
              <S.ProfileInfo isNameInfo={true}>
                {data?.socialDetails.name}
              </S.ProfileInfo>
              <S.ProfileInfo>{data?.socialDetails.email}</S.ProfileInfo>
            </S.ProfileAbleBox>
          </div>
        </S.MyInfo>
        <S.MyInfo>
          <S.GitInfoContainer
            onClick={() =>
              window.open(
                `https://github.com/${data?.socialDetails.socialId}`,
                "_blank"
              )
            }
          >
            <AiFillGithub size={25} color="#929294" />
            <S.ProfileGitId>{data?.socialDetails.socialId}</S.ProfileGitId>
          </S.GitInfoContainer>
        </S.MyInfo>
        <S.MyInfo isLastLine={true}>
          <div style={{ color: "#7b8994", fontWeight: "500" }}>
            {data?.socialDetails.loginType}으로 로그인 중
          </div>
        </S.MyInfo>
      </S.CenterWrap>
    </>
  );
}

export default React.memo(MyInfo);
