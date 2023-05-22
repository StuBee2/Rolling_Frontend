import { MemberType } from "../../../../types/member.type";
import { CommonWrap } from "../Company/style";
import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  data: MemberType;
}

export default function Profile({ data }: Props) {
  return (
    <CommonWrap>
      <S.ProfileContainer>
        <S.MyInfoTitle>기본 정보</S.MyInfoTitle>
        <S.CenterWrap>
          <S.MyInfo isTop={true}>
            <div style={{ display: "flex" }}>
              <S.ProfileImg src="" alt="" />
              <S.ProfileAbleBox>
                <S.ProfileInfo isName={true}>{data.name}</S.ProfileInfo>
                <S.ProfileInfo isName={false}>{data.email}</S.ProfileInfo>
              </S.ProfileAbleBox>
            </div>
          </S.MyInfo>
          <S.MyInfo>
            <S.GitInfoContainer
              onClick={() =>
                window.open(`https://github.com/${data.socialId}`, "_blank")
              }
            >
              <AiFillGithub size={25} color="#929294" />
              <S.ProfileGitId>{data.socialId}</S.ProfileGitId>
            </S.GitInfoContainer>
            <S.EditBtn>수정</S.EditBtn>
          </S.MyInfo>
          <S.MyInfo isBottom={true}>
            <div style={{ color: "#7b8994", fontWeight: "500" }}>
              {data.loginType}으로 로그인 중
            </div>
          </S.MyInfo>
        </S.CenterWrap>
      </S.ProfileContainer>
    </CommonWrap>
  );
}
