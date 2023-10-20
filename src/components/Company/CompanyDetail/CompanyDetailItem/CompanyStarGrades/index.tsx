import average from "@src/assets/images/Company/average.svg";
import { changeStarGradeToArrayObjcet } from "@src/utils/StarGrade/changeStarGradeToArrayObjcet";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";
import Logo from "@src/assets/images/Common/Logo.svg";
import { CompanyStarGradeInfo } from "@src/types/Company/company.type";

interface Props {
  starGradeInfo: CompanyStarGradeInfo;
}

export default function CompanyStarGrades({ starGradeInfo }: Props) {
  const { ...attr } = starGradeInfo;
  return (
    <S.Container>
      <S.Wrapper>
        <S.CompanyBasicInfo>
          <img src={attr.companyImgUrl || Logo} alt="이미지 없음" />
          <p>{attr.companyName}</p>
        </S.CompanyBasicInfo>
        <S.ItemContainer>
          <S.CompanyGradesText>
            <img src={average} alt="이미지 없음" />
            <p>평균 평점</p>
          </S.CompanyGradesText>
          <S.ItemUl>
            {changeStarGradeToArrayObjcet(attr).map((item) => (
              <li key={item.id}>
                <S.StarGradeContainer>
                  <S.StarGradeName>{item.name}</S.StarGradeName>
                  <S.StarGradeScore>{item.rating}점</S.StarGradeScore>
                </S.StarGradeContainer>
                <div>
                  <StarRating
                    width={25}
                    height={25}
                    starRatingCount={item.rating!!}
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
