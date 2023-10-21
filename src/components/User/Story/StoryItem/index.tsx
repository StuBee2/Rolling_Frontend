import { StoryCommonType } from "@src/types/Story/story.type";
import * as S from "./style";
import { changeStoryStarGradesToArrayObject } from "@src/utils/Story/changeStoryStarGradesToArrayObject";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import Star from "@src/components/Common/Star";
import StorySetUp from "@src/components/Common/StorySetUp";
import CompanyInfo from "./CompanyInfo";
import CompanyContent from "./CompanyContent";

interface Props {
  story: StoryCommonType;
}

export default function StoryItem({ story }: Props) {
  const rankStatus = changeStoryStarGradesToArrayObject(story);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CompanyInfoContainer>
            <S.RegisteredAtAndDelEditContainer>
              <S.RegisteredDate>
                {getDateText(new Date(story?.storyModifiedAt))} 등록
              </S.RegisteredDate>
              <S.DelAndEditContainer>
                <StorySetUp
                  storyId={story?.storyId}
                  companyId={story?.companyId!!}
                />
              </S.DelAndEditContainer>
            </S.RegisteredAtAndDelEditContainer>

            <S.CompanyContainer>
              <CompanyInfo {...story} />
              <CompanyContent {...story} />
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
