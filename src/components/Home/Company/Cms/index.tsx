import * as S from "./style";
import cms from "../../../../assets/Home/cms.svg";
import arrow from "../../../../assets/Home/arrow.svg";
import { CompanyContainer, Title } from "../style";

export default function Cms() {
  return (
    <CompanyContainer gap="15px">
      <Title>
        <img src={cms} alt="이미지 없음" />
        <p>개발 채용 공고</p>
      </Title>
      <S.CmsBox>
        <S.CmsImg image="" />
        <S.CmsEtcContainer>
          <img
            src=""
            alt="이미지 없음"
          />
          <div>
            <S.CmsPosterPosition>Backend Engineer</S.CmsPosterPosition>
            <S.CmsCompany>무신사</S.CmsCompany>
          </div>
        </S.CmsEtcContainer>
        <S.NextCmsPostArrowBtn src={arrow} alt="이미지 없음" />
      </S.CmsBox>
    </CompanyContainer>
  );
}
