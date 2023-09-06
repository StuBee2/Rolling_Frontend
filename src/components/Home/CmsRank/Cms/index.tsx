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
          <S.CmsImg image="https://image.musinsa.com/mfile_s01/2018/06/22/e015f5644b36527368c401e4073d633e144501.jpg" />
          <S.CmsEtc>
            <img
              src="https://image.msscdn.net/mfile_s01/fb/share_musinsa.png"
              alt="이미지 없음"
            />
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
