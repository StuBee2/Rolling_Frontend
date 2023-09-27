import { useGetReviewListCompanyIdQuery } from "@src/queries/Review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ReviewInfoIdType } from "@src/types/Review/review.type";
import * as S from "./style";
import Star from "@src/components/Common/Star";
import { changeReviewStarGradesToArrayObject } from "@src/utils/Review/changeReviewStarGradesToArrayObject";
import ReviewSetUp from "@src/components/Common/ReviewSetUp";
import Token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import { jwtDecodeMemberId } from "@src/utils/Auth/jwtDecodeMemberId";

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
    <S.CompanyDetailReviewContainer>
      <S.ReviewTitle>
        <p>기업리뷰 ·</p>
        <S.ReviewCount>{reviewListData?.length}</S.ReviewCount>
      </S.ReviewTitle>
      <S.CompanyDetailReviewWrapper>
        {reviewListData?.length!! > 0 ? (
          reviewList?.pages.map((list) =>
            list.data.map((item) => (
              <ReviewItem key={item.reviewId} companyId={companyId} {...item} />
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
  const isCoincideMemberId = jwtDecodeMemberId() === attr.writerId;
  return (
    <S.ReviewItemBoxContainer>
      <S.ReviewItemBox>
        <S.ReviewItemContentContainer>
          <S.ReviewItemUserInfo>
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
          </S.ReviewItemUserInfo>

          <S.ReviewItemContent isCoincideMemberId={isCoincideMemberId}>
            <S.ReviewItemDescription>
              {attr.reviewContent}
            </S.ReviewItemDescription>
            {Token.getToken(ACCESS_TOKEN_KEY) && isCoincideMemberId && (
              <S.ReviewItemSetUp>
                <ReviewSetUp
                  reviewId={attr.reviewId}
                  companyId={attr.companyId!!}
                />
              </S.ReviewItemSetUp>
            )}
          </S.ReviewItemContent>
        </S.ReviewItemContentContainer>

        <S.ReviewItemStarRatingContainer>
          <Star
            rankStatus={changeReviewStarGradesToArrayObject(attr)}
            width={20}
            height={20}
            fontSize={"15px"}
          />
        </S.ReviewItemStarRatingContainer>
      </S.ReviewItemBox>
    </S.ReviewItemBoxContainer>
  );
}
