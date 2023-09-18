import React from "react";
import * as S from "./style";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import { CompanyInfoType } from "../../../types/Company/company.type";
import CompanyTestImage from "../../../assets/testImage/CompanyTestImage.png";

export default function Horoscope({
  companyInfo,
}: {
  companyInfo: CompanyInfoType;
}) {
  const array = [0, 1, 2, 3, 4];
  console.log(companyInfo);

  const generateStarRatings = (rating: number) => {
    return array.map((el, index) => (
      <S.HoroscopeItems key={el}>
        {index < rating - 0.5 ? (
          <ImStarFull size="25" style={{ color: "#FAD85F" }} />
        ) : index + 0.5 === rating ? (
          <ImStarHalf size="25" style={{ color: "#FAD85F" }} />
        ) : (
          <ImStarFull size="25" style={{ color: "#737B98" }} />
        )}
      </S.HoroscopeItems>
    ));
  };

  return (
    <>
      <S.CompanyHoroscopeContainer>
        <S.CompanyTitle>
          <S.CompanyImage src={CompanyTestImage} alt="Error" />
          <S.CompanyName>{companyInfo.companyName}</S.CompanyName>
        </S.CompanyTitle>
        <S.HoroscopeContainer>
          <S.HoroscopeTitle>⚡️ 평균 평점</S.HoroscopeTitle>
          <S.HoroscopeItemTitle>연봉평점</S.HoroscopeItemTitle>
          <S.RatingBox>
            {generateStarRatings(companyInfo.salaryAndBenefits)}
          </S.RatingBox>
          <S.HoroscopeItemTitle>복지평점</S.HoroscopeItemTitle>
          <S.RatingBox>
            {generateStarRatings(companyInfo.organizationalCulture)}
          </S.RatingBox>
          <S.HoroscopeItemTitle>워라벨평점</S.HoroscopeItemTitle>
          <S.RatingBox>
            {generateStarRatings(companyInfo.workLifeBalance)}
          </S.RatingBox>
          <S.HoroscopeItemTitle>총합별점</S.HoroscopeItemTitle>
          <S.RatingBox>
            {generateStarRatings(companyInfo.totalGrade)}
          </S.RatingBox>
        </S.HoroscopeContainer>
      </S.CompanyHoroscopeContainer>
    </>
  );
}
