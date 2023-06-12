import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";
import { MemberType } from "../../../../types/member.type";

interface Props {
  myInfo: MemberType;
}

export default function Profile({ myInfo }: Props) {
  return (
    <S.ProfileContainer>
      <S.MyInfoTitle>기본 정보</S.MyInfoTitle>
      <S.CenterWrap>
        <S.MyInfo top={"80px"}>
          <div style={{ display: "flex" }}>
            <S.ProfileImg src={myInfo?.socialDetails.imageUrl} alt="" />
            <S.ProfileAbleBox>
              <S.ProfileInfo isNameInfo={true}>
                {myInfo?.socialDetails.name}
              </S.ProfileInfo>
              <S.ProfileInfo>{myInfo?.socialDetails.email}</S.ProfileInfo>
            </S.ProfileAbleBox>
          </div>
        </S.MyInfo>
        <S.MyInfo>
          <S.GitInfoContainer
            onClick={() =>
              window.open(
                `https://github.com/${myInfo?.socialDetails.socialId}`,
                "_blank"
              )
            }
          >
            <AiFillGithub size={25} color="#929294" />
            <S.ProfileGitId>{myInfo?.socialDetails.socialId}</S.ProfileGitId>
          </S.GitInfoContainer>
        </S.MyInfo>
        <S.MyInfo isLastLine={true}>
          <div style={{ color: "#7b8994", fontWeight: "500" }}>
            {myInfo?.socialDetails.loginType}으로 로그인 중
          </div>
        </S.MyInfo>
      </S.CenterWrap>
    </S.ProfileContainer>
  );
}
