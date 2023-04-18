import * as V from "./FirmReview.style";

const FirmReview = () => {
  return (
    <V.FirmReviewBox>
      <V.FirmReviewTitle>기업 리뷰</V.FirmReviewTitle>
      <V.FirmReviewList>
        <text>포지션</text>
        <V.Explanation>
          (회사에서 자신이 어떤 직무를 맡고 있는지 자세하게 써주세요)
          <br />
          ex 프론트엔드 개발자 홈페이지 개발
        </V.Explanation>
        <input required></input>
        <text>입사경로</text>
        <input required></input>
        <text>회사 만족도(회사 평점)</text>
        <V.Explanation>
          (워라벨,연봉 만족도, 기업 문화(복지)를 평가해주세요)
        </V.Explanation>
      </V.FirmReviewList>
    </V.FirmReviewBox>
  );
};

export default FirmReview;
