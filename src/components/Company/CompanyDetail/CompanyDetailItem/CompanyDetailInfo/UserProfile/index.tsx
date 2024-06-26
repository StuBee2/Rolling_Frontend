import * as S from "./style";
import github from "@src/assets/images/Auth/github.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { convertToGithubLink } from "@src/utils/github/convertToGithubLink";
import { CompanyDetailRegistAt } from "../style";

interface Props {
  memberImageUrl: string;
  memberNickName: string;
  memberSocialLoginId: string;
  companyCreatedAt: string;
}

const CompanyDetailUserProfile = ({ ...attr }: Props) => {
  const userName = attr.memberNickName || attr.memberSocialLoginId;
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImgContainer>
          <img src={attr.memberImageUrl || ""} alt="이미지 없음" />
        </S.ImgContainer>

        <S.Content nameLength={userName.length}>
          <S.NickName>{userName}</S.NickName>
          <S.GithubId
            onClick={() =>
              window.open(
                convertToGithubLink(attr.memberSocialLoginId),
                "_blank"
              )
            }
          >
            <img src={github} alt="이미지 없음" />
            <p>{attr.memberSocialLoginId}</p>
          </S.GithubId>
        </S.Content>
      </S.Wrapper>

      <CompanyDetailRegistAt widthType={"max-width"}>
        {getDateText(new Date(attr.companyCreatedAt))} 작성
      </CompanyDetailRegistAt>
    </S.Container>
  );
};

export default CompanyDetailUserProfile;
