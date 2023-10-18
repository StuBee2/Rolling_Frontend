import { useGetReviewListCompanyIdQuery } from "@src/queries/Review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import ReviewItem from "./ReviewItem";

interface Props {
  companyId: string;
}

export default function CompanyDetailReview({ companyId }: Props) {
  const { data: reviewList, fetchNextPage } = useGetReviewListCompanyIdQuery(
    { id: companyId },
    { suspense: true }
  );
  const [ref, inView] = useInView();
  const reviewListData = reviewList?.pages[0].data;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.Container>
      <S.ReviewTitle>
        <p>기업리뷰 ·</p>
        <S.ReviewCount>{reviewListData?.length}</S.ReviewCount>
      </S.ReviewTitle>
      <S.Wrapper>
        {reviewListData?.length!! > 0 ? (
          reviewList?.pages.map((list) =>
            list.data.map((item) => (
              <ReviewItem key={item.reviewId} companyId={companyId} {...item} />
            ))
          )
        ) : (
          <div>등록된 리뷰가 없습니다.</div>
        )}
      </S.Wrapper>
      <div ref={ref} />
    </S.Container>
  );
}