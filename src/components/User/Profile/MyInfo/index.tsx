import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { Explain, Title } from "../style";
import * as S from "./style";
import { MemberType } from "@src/types/Member/member.type";
import EditNickname from "./EditNickname";

interface Props {
  data: MemberType;
}

export default function MyInfo({ data }: Props) {
  const myGihhubLink = `https://github.com/${data?.socialDetails.socialLoginId}`;
  return (
    <S.MyInfoContainer>
      <S.MyInfoWrapper>
        <S.MyInfoTextContainer>
          <Title>기본 정보</Title>
          <Explain>
            롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다.
          </Explain>
        </S.MyInfoTextContainer>
        <S.MyInfoAbleContainer>
          <img src={data?.socialDetails.imageUrl || ""} alt="이미지 없음" />
          <div>
            <EditNickname nickName={data?.memberDetails.nickName} />
            <S.MyGitInfoLoginTypeText>
              {data?.socialDetails.loginType}으로 로그인 중
            </S.MyGitInfoLoginTypeText>
          </div>
        </S.MyInfoAbleContainer>
        <S.MyGitInfoContainer
          onClick={() => window.open(myGihhubLink, "_blank")}
        >
          <div>
            <AiFillGithub size={25} />
            <p>{data?.socialDetails.socialLoginId}</p>
          </div>
        </S.MyGitInfoContainer>
      </S.MyInfoWrapper>
    </S.MyInfoContainer>
  );
}
