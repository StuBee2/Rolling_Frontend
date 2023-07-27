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
        <S.CmsImg image="https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/05/104767925.1.jpg" />
        <S.CmsEtcContainer>
          <img
            src="https://cdn.dynews.co.kr/news/photo/201804/403722_64988_08.jpg"
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
