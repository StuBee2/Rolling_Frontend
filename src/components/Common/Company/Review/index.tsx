import * as R from "./style";
import StarScope from "./ReviewStarScope";

const FirmReview = () => {
  return (
    <R.ReviewBox>
      <R.ReviewTitle>기업 리뷰</R.ReviewTitle>
      <R.ReviewList>
        <R.Text>포지션</R.Text>
        <R.ReviewExplanation>
          (회사에서 자신이 어떤 직무를 맡고 있는지 자세하게 써주세요)
          <br />
          ex 프론트엔드 개발자 홈페이지 개발
        </R.ReviewExplanation>
        <R.Input></R.Input>
        <R.Text>입사경로</R.Text>
        <R.Input></R.Input>
        <R.Text>회사 만족도(회사 평점)</R.Text>
        <R.ReviewExplanation>
          (워라벨,연봉 만족도, 기업 문화(복지)를 평가해주세요)
        </R.ReviewExplanation>
        <StarScope />
      </R.ReviewList>
    </R.ReviewBox>
  );
};

export default FirmReview;
