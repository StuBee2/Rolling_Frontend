import * as S from "./style";
import github from "@src/assets/Auth/github.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { converToGithubLink } from "@src/utils/github/converToGithubLink";
import { CompanyDetailRegistAt } from "../style";

interface Props {
  memberImageUrl: string;
  memberNickName: string;
  memberSocialLoginId: string;
  companyCreatedAt: string;
}

export default function CompanyDetailUserProfile({ ...attr }: Props) {
  return (
    <S.CompanyDetailUserProfileContainer>
      <S.CompanyDetailUserProfileWrapper>
        <S.CompanyDetailUserProfileImgContainer>
          <img src={attr.memberImageUrl || ""} alt="이미지 없음" />
        </S.CompanyDetailUserProfileImgContainer>

        <S.CompanyDetailUserProfileContent
          nameLength={attr.memberNickName.length}
        >
          <S.CompanyDetailNickName>
            {attr.memberNickName}
          </S.CompanyDetailNickName>
          <S.CompanyDetailGithubId
            onClick={() =>
              window.open(
                converToGithubLink(attr.memberSocialLoginId),
                "_blank"
              )
            }
          >
            <img src={github} alt="이미지 없음" />
            <p>{attr.memberSocialLoginId}</p>
          </S.CompanyDetailGithubId>
        </S.CompanyDetailUserProfileContent>
      </S.CompanyDetailUserProfileWrapper>

      <CompanyDetailRegistAt widthType={"max-width"}>
        {getDateText(new Date(attr.companyCreatedAt))} 작성
      </CompanyDetailRegistAt>
    </S.CompanyDetailUserProfileContainer>
  );
}
