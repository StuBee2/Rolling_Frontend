import { useGetMyReviewQuery } from "@src/queries/Review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import write from "@src/assets/User/write.svg";
import { Container, Explain, Title } from "../Profile/style";
import * as S from "./style";
import ReviewItem from "./ReviewItem";
import { getTimeAgo } from "@stubee2/stubee2-rolling-util";
import { FontSize } from "../style";

export default function Review() {
  const { data: reviewList, fetchNextPage } = useGetMyReviewQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <Container>
      <Title>
        {/* <S.FontSize fontSize="30px">내 리뷰 Story</S.FontSize> */}
        <Explain>자신이 직접 롤링한 회사를 보여줘요</Explain>
      </Title>
      <S.CompanyStatusContainer>
        <img src={write} alt="이미지 없음" />
        <div>
          <S.WriteText>Write</S.WriteText>
          <S.UpdateAtListCount>
            5개월 전 업데이트 · 갯수 {reviewList?.pages[0].data.length!!}
          </S.UpdateAtListCount>
        </div>
      </S.CompanyStatusContainer>

      <S.ListWrap>
        {reviewList?.pages[0].data.length!! > 0 ? (
          reviewList?.pages.map((data) =>
            data.data.map((review) => (
              <ReviewItem review={review} key={review.reviewId} />
            ))
          )
        ) : (
          <div>리뷰가 없습니다.</div>
        )}
      </S.ListWrap>
      <div ref={ref} />
    </Container>
  );
}
