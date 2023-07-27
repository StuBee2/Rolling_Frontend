import { useGetMyReviewQuery } from "../../../../queries/review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import write from "../../../../assets/User/write.svg";
import { Container, Explain, Title } from "../../Profile/style";
import { getTimeAgo } from "../../../../libs/Date/getTimeAgo";
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
        <S.FontSize fontSize="30px">내 기업 History</S.FontSize>
        <Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </Explain>
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
