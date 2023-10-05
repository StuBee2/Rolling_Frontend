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
  const { companyImgUrl, companyName, ...attr } = starGradeInfo;
  return (
    <S.CompanyStarGradesContainer>
      <S.CompanyStarGradesWrapper>
        <S.CompanyBasicInfo>
          <img src={companyImgUrl || Logo} alt="이미지 없음" />
          <p>{companyName}</p>
        </S.CompanyBasicInfo>
        <S.CompanyStarGradesItemContainer>
          <S.CompanyGradeText>
            <img src={average} alt="이미지 없음" />
            <p>평균 평점</p>
          </S.CompanyGradeText>
          <S.CompanyStarGradesItemUl>
            {changeStarGradeToArrayObjcet(attr).map((item) => (
              <li key={item.id}>
                <S.StarGradeContainer>
                  <S.StarGradeText>{item.name}</S.StarGradeText>
                  <S.StarGradeScoreText>{item.rating}점</S.StarGradeScoreText>
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
          </S.CompanyStarGradesItemUl>
        </S.CompanyStarGradesItemContainer>
      </S.CompanyStarGradesWrapper>
    </S.CompanyStarGradesContainer>
  );
}
