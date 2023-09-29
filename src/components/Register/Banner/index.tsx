import * as S from "./style";
import bigBannerIcon1 from "@src/assets/Register/bigBannerIcon1.svg";
import bigBannerIcon2 from "@src/assets/Register/bigBannerIcon2.svg";
import middleBannerIcon from "@src/assets/Register/middleBannerIcon.svg";
import smallBannerIcon1 from "@src/assets/Register/smallBannerIcon1.svg";
import smallBannerIcon2 from "@src/assets/Register/smallBannerIcon2.svg";

export default function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerWrapper>
        <S.BannerTitleContainer>
          <S.BannerTitle>내 기업 등록하기</S.BannerTitle>
          <S.BannerSubTitleContainer>
            <p>나의 기업을 등록하세요</p>
            <p>내 기업이 등록되어있다면 다양한 서비스를 즐길 수 있어요</p>
          </S.BannerSubTitleContainer>
        </S.BannerTitleContainer>
        <S.MiddleBannerIcon src={middleBannerIcon} alt="이미지 없음" />
        <S.SmallBannerIcon1 src={smallBannerIcon1} alt="이미지 없음" />
        <S.BigBannerIcon1 src={bigBannerIcon1} alt="이미지 없음" />
        <S.SmallBannerIcon2 src={smallBannerIcon2} alt="이미지 없음" />
        <S.BigBannerIcon2 src={bigBannerIcon2} alt="이미지 없음" />
      </S.BannerWrapper>
    </S.BannerContainer>
  );
}
