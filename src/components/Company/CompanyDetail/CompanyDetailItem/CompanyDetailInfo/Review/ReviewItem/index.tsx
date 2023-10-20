import ReviewSetUp from "@src/components/Common/ReviewSetUp";
import Star from "@src/components/Common/Star";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { ReviewInfoIdType } from "@src/types/Review/review.type";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";
import { changeReviewStarGradesToArrayObject } from "@src/utils/Review/changeReviewStarGradesToArrayObject";
import * as S from "./style";

export default function ReviewItem({ ...attr }: ReviewInfoIdType) {
  const isCoincideMemberId = jwtDecoding("sub") === attr.writerId;

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentContainer>
          <S.UserInfo>
            <S.Profile>
              <S.ImgUrl src={attr.memberImageUrl} alt="이미지 없음" />
              <S.NickName>
                {/* {attr.memberNickName || attr.memberSocialId} */}
              </S.NickName>
            </S.Profile>

            <S.PositionAndCareerPath>
              <p>
                <span>포지션 · </span>
              </p>
              <p>
                <span>입사경로 · </span>
              </p>
            </S.PositionAndCareerPath>
          </S.UserInfo>

          <S.ContentWrapper>
            <S.Description></S.Description>
            {Token.getToken(ACCESS_TOKEN_KEY) && isCoincideMemberId && (
              <S.SetUp>
                <ReviewSetUp
                  reviewId={attr.storyId}
                  companyId={attr.companyId!!}
                />
              </S.SetUp>
            )}
          </S.ContentWrapper>
        </S.ContentContainer>

        <S.StarRatingContainer>
          <Star
            rankStatus={changeReviewStarGradesToArrayObject(attr)}
            width={20}
            height={20}
            fontSize={"15px"}
          />
        </S.StarRatingContainer>
      </S.Wrapper>
    </S.Container>
  );
}
