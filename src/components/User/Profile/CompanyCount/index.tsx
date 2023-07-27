import * as S from "./style";
import regist from "../../../../assets/User/regist.svg";
import review from "../../../../assets/User/review.svg";

export default function CompanyCount() {
  return (
    <S.CompanyStatusWrap>
      <S.CompanyStatusContainer>
        <S.CompanyStatus>
          <img src={regist} alt="" />
          <S.CompanyNumber>2</S.CompanyNumber>
        </S.CompanyStatus>
        <div>
          <S.CompanyNumberText>내가 등록한 기업의 수</S.CompanyNumberText>
          <S.StatusText>최근 업데이트 5개월 전</S.StatusText>
        </div>
      </S.CompanyStatusContainer>
      <S.CompanyStatusContainer>
        <S.CompanyStatus>
          <img src={review} alt="" />
          <S.CompanyNumber>2</S.CompanyNumber>
        </S.CompanyStatus>
        <div>
          <S.CompanyNumberText>내가 리뷰한 기업의 수</S.CompanyNumberText>
          <S.StatusText>최근 업데이트 5개월 전</S.StatusText>
        </div>
      </S.CompanyStatusContainer>
    </S.CompanyStatusWrap>
  );
}
