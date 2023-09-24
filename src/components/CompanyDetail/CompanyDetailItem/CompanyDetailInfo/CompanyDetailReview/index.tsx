import { useGetReviewListCompanyIdQuery } from "@src/queries/Review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ReviewInfoIdType } from "@src/types/Review/review.type";
import * as S from "./style";
import Star from "@src/components/Common/Star";
import { changeReviewStatusToArrayObject } from "@src/utils/Review/changeRankStatusToArrayObject";

interface Props {
  reviewId: string;
}

export default function CompanyDetailReview({ reviewId }: Props) {
  const { data: reviewList, fetchNextPage } = useGetReviewListCompanyIdQuery(
    { id: reviewId },
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
    <S.CompanyDetailReviewContainer>
      <S.ReviewTitle>
        <p>기업리뷰 ·</p>
        <S.ReviewCount>{reviewListData?.length}</S.ReviewCount>
      </S.ReviewTitle>
      <S.CompanyDetailReviewWrapper>
        {reviewListData?.length!! > 0 ? (
          reviewList?.pages.map((list) =>
            list.data.map((item) => (
              <ReviewItem key={item.reviewId} {...item} />
            ))
          )
        ) : (
          <div>등록된 리뷰가 없습니다.</div>
        )}
      </S.CompanyDetailReviewWrapper>
      <div ref={ref} />
    </S.CompanyDetailReviewContainer>
  );
}

function ReviewItem({ ...attr }: ReviewInfoIdType) {
  return (
    <S.ReviewItemBoxContainer>
      <S.ReviewItemBox>
        <S.ReviewItemContentContainer>
          <S.ReviewItemContent>
            <S.ReviewItemProfileInfo>
              <S.ReviewItemImgUrl src={attr.memberImageUrl} alt="이미지 없음" />
              <S.ReviewItemNickName>
                {attr.memberNickName || attr.memberSocialId}
              </S.ReviewItemNickName>
            </S.ReviewItemProfileInfo>

            <S.ReviewItemPositionAndCareerPath>
              <p>
                <span>포지션 · </span>
                {attr.reviewPosition}
              </p>
              <p>
                <span>입사경로 · </span>
                {attr.reviewCareerPath}
              </p>
            </S.ReviewItemPositionAndCareerPath>
          </S.ReviewItemContent>

          <S.ReviewItemDescription>
            {attr.reviewContent}
          </S.ReviewItemDescription>
        </S.ReviewItemContentContainer>

        <S.ReviewItemStarRatingContainer>
          <Star
            rankStatus={changeReviewStatusToArrayObject(attr)}
            width={25}
            height={25}
            fontSize={"15.5px"}
          />
        </S.ReviewItemStarRatingContainer>
      </S.ReviewItemBox>
    </S.ReviewItemBoxContainer>
  );
}
