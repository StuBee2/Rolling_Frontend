import { StoryCommonType } from "@src/types/Review/review.type";
import * as S from "./style";
import { changeReviewStarGradesToArrayObject } from "@src/utils/Review/changeReviewStarGradesToArrayObject";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import Star from "@src/components/Common/Star";
import ReviewSetUp from "@src/components/Common/ReviewSetUp";
import CompanyInfo from "./CompanyInfo";
import CompanyContent from "./CompanyContent";

interface Props {
  review: StoryCommonType;
}

export default function ReviewItem({ review }: Props) {
  const rankStatus = changeReviewStarGradesToArrayObject(review);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CompanyInfoContainer>
            <S.RegisteredAtAndDelEditContainer>
              <S.RegisteredDate>
                {getDateText(new Date(review?.storyModifiedAt))} 등록
              </S.RegisteredDate>
              <S.DelAndEditContainer>
                <ReviewSetUp
                  reviewId={review?.storyId}
                  companyId={review?.companyId!!}
                />
              </S.DelAndEditContainer>
            </S.RegisteredAtAndDelEditContainer>

            <S.CompanyContainer>
              <CompanyInfo {...review} />
              <CompanyContent {...review} />
            </S.CompanyContainer>
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
