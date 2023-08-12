import * as S from "./style";
import employment from "@src/assets/User/employment.svg";

export default function CompanyStatus() {
  return (
    <S.CompanyStatusWrap>
      <S.CompanyStatusContainer>
        <S.CompanyStatus>
          <img src={employment} alt="" />
          <S.CompanyNumber>2</S.CompanyNumber>
        </S.CompanyStatus>
        <div>
          <S.CompanyNumberText>내가 작성한 리뷰 수</S.CompanyNumberText>
          <S.StatusText>최근 업데이트 5개월 전</S.StatusText>
        </div>
      </S.CompanyStatusContainer>
    </S.CompanyStatusWrap>
  );
}
