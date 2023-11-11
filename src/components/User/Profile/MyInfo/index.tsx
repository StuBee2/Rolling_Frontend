import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import * as S from "./style";
import NickName from "./NickName";
import { Explain, Title } from "../../style";
import { convertToGithubLink } from "@src/utils/github/convertToGithubLink";
import { useRecoilValue } from "recoil";
import { MyMemberInfo } from "@src/stores/member/member.store";

export default function MyInfo() {
  const myInfo = useRecoilValue(MyMemberInfo);

  return (
    <S.Container>
      <S.Wrapper>
        <S.TextContainer>
          <div>
            <Title>기본 정보</Title>
            {!myInfo?.memberDetails.nickName && (
              <S.SetUpNickNameText>닉네임을 설정하세요!</S.SetUpNickNameText>
            )}
          </div>
          <Explain>
            롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다.
          </Explain>
        </S.TextContainer>

        <S.UserInfoContainer>
          <img src={myInfo?.socialDetails.imageUrl || ""} alt="이미지 없음" />
          {myInfo && (
            <div>
              <NickName nickName={myInfo.memberDetails.nickName} />
            </div>
          )}
        </S.UserInfoContainer>

        <S.MyGitInfoContainer>
          <div
            onClick={() =>
              window.open(
                convertToGithubLink(myInfo?.socialDetails.socialLoginId!!),
                "_blank"
              )
            }
          >
            <AiFillGithub size={25} />
            <p>{myInfo?.socialDetails.socialLoginId}</p>
          </div>

          <S.MyGitInfoLoginTypeText>
            {myInfo?.socialDetails.loginType}으로 로그인 중
          </S.MyGitInfoLoginTypeText>
        </S.MyGitInfoContainer>
      </S.Wrapper>
    </S.Container>
  );
}
