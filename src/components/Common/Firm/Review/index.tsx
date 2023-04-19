import * as V from "../style";

const FirmReview = () => {
  return (
    <V.FirmBox>
      <V.FirmTitle>기업 리뷰</V.FirmTitle>
      <V.FirmList>
        <text>포지션</text>
        <V.Explanation isRegister={true}>
          (회사에서 자신이 어떤 직무를 맡고 있는지 자세하게 써주세요)
          <br />
          ex 프론트엔드 개발자 홈페이지 개발
        </V.Explanation>
        <input required></input>
        <text>입사경로</text>
        <input required></input>
        <text>회사 만족도(회사 평점)</text>
        <V.Explanation isRegister={false}>
          (워라벨,연봉 만족도, 기업 문화(복지)를 평가해주세요)
        </V.Explanation>
      </V.FirmList>
    </V.FirmBox>
  );
};

export default FirmReview;
