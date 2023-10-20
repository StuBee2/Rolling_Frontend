import { useGetMyReviewQuery } from "@src/queries/Review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import ReviewItem from "./ReviewItem";

export default function Review() {
  const { data: reviewList, fetchNextPage } = useGetMyReviewQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();
  const reviewListData = reviewList?.pages[0].data!!;
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <S.ListWrapper>
        {reviewListData?.length!! > 0 ? (
          reviewList?.pages.map((data) =>
            data.data.map((review) => (
              <ReviewItem review={review} key={review.storyId} />
            ))
          )
        ) : (
          <div>롤링한 기업이 없습니다.</div>
        )}
      </S.ListWrapper>
      <div ref={ref} />
    </>
  );
}
