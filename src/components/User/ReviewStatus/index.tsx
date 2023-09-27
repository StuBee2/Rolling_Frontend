import * as S from "./style";
import employment from "@src/assets/User/employment.svg";
import { useGetReviewMyStatusQuery } from "@src/queries/Review/review.query";
import { getTimeAgo } from "@stubee2/stubee2-rolling-util";

export default function ReviewStatus() {
  const { data: reviewStatus } = useGetReviewMyStatusQuery({ suspense: true });
  console.log(reviewStatus);
  return (
    <S.ReviewStatusWrap>
      <S.ReviewStatusContainer>
        <S.ReviewStatus>
          <img src={employment} alt="이미지 없음" />
        </S.ReviewStatus>
        <div>
          <S.ReviewNumberText>
            내가 작성한 리뷰 수 : {reviewStatus?.count}개
          </S.ReviewNumberText>
          <S.StatusText>
            최근 업데이트 {getTimeAgo(reviewStatus?.lastModifiedDate)}
          </S.StatusText>
        </div>
      </S.ReviewStatusContainer>
    </S.ReviewStatusWrap>
  );
}
