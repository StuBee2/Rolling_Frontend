import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { Explain, Title } from "../style";
import * as S from "./style";
import { MemberType } from "@src/types/Member/member.type";

interface Props {
  data: MemberType;
}

export default function MyInfo({ data }: Props) {
  return (
    <S.MyInfoContainer>
      <S.BasicInfoContainer>
        <Title>
          <div style={{ fontSize: "25px", color: "#000" }}>기본 정보</div>
          <Explain>
            롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다
          </Explain>
        </Title>

        <S.GitUserContainer>
          <S.GitUserLogo src={data?.socialDetails.imageUrl} alt="이미지 없음" />
          <div>
            <S.GitUserName>{data?.socialDetails.name}</S.GitUserName>
            <S.GitUserEmail>{data?.socialDetails.email}</S.GitUserEmail>
          </div>
        </S.GitUserContainer>
      </S.BasicInfoContainer>

      <S.GitContainer>
        <S.GitLink
          onClick={() =>
            window.open(
              `https://github.com/${data?.socialDetails.socialId}`,
              "_blank"
            )
          }
        >
          <AiFillGithub size={25} />
          <p style={{ fontWeight: "500" }}>
            {data?.socialDetails.socialLoginId}
          </p>
        </S.GitLink>
        <S.GitLoginType>
          {data?.socialDetails.loginType} 로그인 중
        </S.GitLoginType>
      </S.GitContainer>
    </S.MyInfoContainer>
  );
}
