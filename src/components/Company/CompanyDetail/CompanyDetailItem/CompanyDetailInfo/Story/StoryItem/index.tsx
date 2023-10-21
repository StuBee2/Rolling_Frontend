import StorySetUp from "@src/components/Common/StorySetUp";
import Star from "@src/components/Common/Star";
import CompanyContent from "@src/components/User/Story/StoryItem/CompanyContent";
import CompanyInfo from "@src/components/User/Story/StoryItem/CompanyInfo";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { StoryCommonType } from "@src/types/Story/Story.type";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";
import { changeStoryStarGradesToArrayObject } from "@src/utils/Story/changeStoryStarGradesToArrayObject";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import * as S from "@src/components/User/Story/StoryItem/style";

export default function StoryItem({ ...attr }: StoryCommonType) {
  const isCoincideMemberId = jwtDecoding("sub") === attr.writerId;
  const rankStatus = changeStoryStarGradesToArrayObject(attr);

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
                  <StorySetUp
                    storyId={attr.storyId}
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
