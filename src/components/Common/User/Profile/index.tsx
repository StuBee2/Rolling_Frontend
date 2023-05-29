import { useGetMyInfo } from "../../../../queries/Member/Member.query";
import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";

export default function Profile() {
  const { data: myInfo } = useGetMyInfo({ suspense: true });

  return (
    <S.ProfileContainer>
      <S.MyInfoTitle>기본 정보</S.MyInfoTitle>
      <S.CenterWrap>
        <S.MyInfo isTop={true}>
          <div style={{ display: "flex" }}>
            <S.ProfileImg src={myInfo?.imageUrl} alt="" />
            <S.ProfileAbleBox>
              <S.ProfileInfo isName={true}>{myInfo?.name}</S.ProfileInfo>
              <S.ProfileInfo>{myInfo?.email}</S.ProfileInfo>
            </S.ProfileAbleBox>
          </div>
        </S.MyInfo>
        <S.MyInfo>
          <S.GitInfoContainer
            onClick={() =>
              window.open(`https://github.com/${myInfo?.socialId}`, "_blank")
            }
          >
            <AiFillGithub size={25} color="#929294" />
            <S.ProfileGitId>{myInfo?.socialId}</S.ProfileGitId>
          </S.GitInfoContainer>
        </S.MyInfo>
        <S.MyInfo isBottom={true}>
          <div style={{ color: "#7b8994", fontWeight: "500" }}>
            {myInfo?.loginType}으로 로그인 중
          </div>
        </S.MyInfo>
      </S.CenterWrap>
    </S.ProfileContainer>
  );
}
