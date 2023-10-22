import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import * as S from "./style";
import { MemberType } from "@src/types/Member/member.type";
import NickName from "./NickName";
import { Explain, Title } from "../../style";
import { convertToGithubLink } from "@src/utils/github/convertToGithubLink";

interface Props {
  data: MemberType;
}

export default function MyInfo({ data }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextContainer>
          <Title>기본 정보</Title>
          <Explain>
            롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다.
          </Explain>
        </S.TextContainer>
        <S.AbleContainer>
          <img src={data?.socialDetails.imageUrl || ""} alt="이미지 없음" />
          <div>
            <NickName nickName={data?.memberDetails.nickName} />
            <S.MyGitInfoLoginTypeText>
              {data?.socialDetails.loginType}으로 로그인 중
            </S.MyGitInfoLoginTypeText>
          </div>
        </S.AbleContainer>
        <S.MyGitInfoContainer
          onClick={() =>
            window.open(
              convertToGithubLink(data?.socialDetails.socialLoginId),
              "_blank"
            )
          }
        >
          <div>
            <AiFillGithub size={25} />
            <p>{data?.socialDetails.socialLoginId}</p>
          </div>
        </S.MyGitInfoContainer>
      </S.Wrapper>
    </S.Container>
  );
}
