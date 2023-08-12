import { useGetMyReviewQuery } from "@src/queries/review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import write from "@src/assets/User/write.svg";
import { Container, Explain, Title } from "../../Profile/style";
import { getTimeAgo } from "@src/util/Date/getTimeAgo";
import * as S from "../style";
import ReviewItem from "./ReviewItem";

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
        <S.FontSize fontSize="30px">내 리뷰 Story</S.FontSize>
        <Explain>자신이 직접 롤링한 회사를 보여줘요</Explain>
      </Title>
      <S.CompanyStatus>
        <img src={write} alt="" />
        <S.ContentGap>
          <S.CompanyAndWriteText>Write</S.CompanyAndWriteText>
          <S.FontSize fontSize="11px">
            {reviewList?.pages[0].data[0]
              ? getTimeAgo(
                  new Date(reviewList?.pages[0].data[0].reviewCreatedAt!!)
                )
              : "0"}{" "}
            업데이트 · 갯수 2
          </S.FontSize>
        </S.ContentGap>
      </S.CompanyStatus>

      <S.ListWrap>
        {reviewList?.pages.map((data) =>
          data.data.map((review) => (
            <ReviewItem review={review} key={review.reviewId} />
          ))
        )}
      </S.ListWrap>
      <div ref={ref} />
    </Container>
  );
}
