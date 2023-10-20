import ReviewSetUp from "@src/components/Common/ReviewSetUp";
import Star from "@src/components/Common/Star";
import CompanyContent from "@src/components/User/Review/ReviewItem/CompanyContent";
import CompanyInfo from "@src/components/User/Review/ReviewItem/CompanyInfo";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { ReviewInfoIdType } from "@src/types/Review/review.type";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";
import { changeReviewStarGradesToArrayObject } from "@src/utils/Review/changeReviewStarGradesToArrayObject";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import * as S from "@src/components/User/Review/ReviewItem/style";

export default function ReviewItem({ ...attr }: ReviewInfoIdType) {
  const isCoincideMemberId = jwtDecoding("sub") === attr.writerId;
  const rankStatus = changeReviewStarGradesToArrayObject(attr);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CompanyInfoContainer>
            <S.RegisteredAtAndDelEditContainer>
              <S.RegisteredDate>
                {getDateText(new Date(attr.storyModifiedAt))} 등록
              </S.RegisteredDate>

              {Token.getToken(ACCESS_TOKEN_KEY) && isCoincideMemberId && (
                <S.DelAndEditContainer>
                  <ReviewSetUp
                    reviewId={attr.storyId}
                    companyId={attr.companyId!!}
                  />
                </S.DelAndEditContainer>
              )}
            </S.RegisteredAtAndDelEditContainer>

            <S.ContentContainer>
              <CompanyInfo {...attr} />
              <CompanyContent {...attr} />
            </S.ContentContainer>
          </S.CompanyInfoContainer>

          <S.StarRatingContainer>
            <Star
              rankStatus={rankStatus}
              width={20}
              height={20}
              fontSize={"15px"}
            />
          </S.StarRatingContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
