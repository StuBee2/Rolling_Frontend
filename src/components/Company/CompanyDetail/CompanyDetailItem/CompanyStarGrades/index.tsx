import bolt from "@src/assets/icons/Company/bolt.svg";
import { convertStarRatingObject } from "@src/utils/StarRating/convertRankingObject";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";
import logo from "@src/assets/icons/Logo/logo.svg";
import { CompanyStarGradeInfo } from "@src/types/Company/company.type";
import { getRgb } from "@src/utils/Rgb/getRgb";

interface Props {
  starGradeInfo: CompanyStarGradeInfo;
}

export default function CompanyStarGrades({ starGradeInfo }: Props) {
  const { ...attr } = starGradeInfo;
  return (
    <S.Container>
      <S.Wrapper>
        <S.CompanyBasicInfo
          backgroundColor={getRgb(starGradeInfo.companyLogoRgb)}
        >
          <img src={attr.companyImgUrl || logo} alt="이미지 없음" />
          <p>{attr.companyName}</p>
        </S.CompanyBasicInfo>
        <S.ItemContainer>
          <S.CompanyGradesText>
            <img src={bolt} alt="이미지 없음" />
            <p>평균 평점</p>
          </S.CompanyGradesText>
          <S.ItemUl>
            {convertStarRatingObject(attr).map((item) => (
              <li key={item.id}>
                <S.StarGradeContainer>
                  <S.StarGradeTitle>{item.title}</S.StarGradeTitle>
                  <S.StarGradeScore>{item.star}점</S.StarGradeScore>
                </S.StarGradeContainer>
                <div>
                  <StarRating
                    width={25}
                    height={25}
                    starRatingCount={item.star!!}
                  />
                </div>
              </li>
            ))}
          </S.ItemUl>
        </S.ItemContainer>
      </S.Wrapper>
    </S.Container>
  );
}
