import * as S from "./style";
import cms from "@src/assets/Home/cms.svg";
import arrow from "@src/assets/Home/arrow.svg";

export default function Cms() {
  return (
    <S.CmsContainer>
      <S.CmsTitle>
        <img src={cms} alt="이미지 없음" />
        <p>개발 채용 공고</p>
      </S.CmsTitle>
      <S.CmsBoxContanier>
        <S.CmsBox>
          <S.CmsImg image="" />
          <S.CmsEtc>
            <img src="" alt="이미지 없음" />
            <div>
              <S.CmsPosition>Backend Engineer</S.CmsPosition>
              <S.CmsCompany>무신사</S.CmsCompany>
            </div>
          </S.CmsEtc>
        </S.CmsBox>
        <S.ArrowImg src={arrow} alt="이미지 없음" />
      </S.CmsBoxContanier>
    </S.CmsContainer>
  );
}
