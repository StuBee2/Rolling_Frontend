import * as S from "./style";
import myReview from "@src/assets/images/User/myReview.svg";
import { useGetReviewMyStatusQuery } from "@src/queries/Review/review.query";
import { getTimeAgo } from "@stubee2/stubee2-rolling-util";

export default function ReviewStatus() {
  const { data: reviewStatus } = useGetReviewMyStatusQuery({ suspense: true });
  const { count, lastModifiedDate } = reviewStatus!!;
  return (
    <div>
      <S.ReviewStatusContainer>
        <S.ReviewStatus>
          <img src={myReview} alt="이미지 없음" />
        </S.ReviewStatus>
        <div>
          <S.ReviewNumberText>
            내가 작성한 롤링 Story · {count}개
          </S.ReviewNumberText>
          <S.StatusText>
            {count
              ? "최근 업데이트 " + getTimeAgo(lastModifiedDate)
              : "롤링한 회사가 없습니다."}
          </S.StatusText>
        </div>
      </S.ReviewStatusContainer>
    </div>
  );
}
