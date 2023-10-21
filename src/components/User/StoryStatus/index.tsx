import * as S from "./style";
import printer from "@src/assets/icons/Story/printer.png";
import { useGetStoryMyStatusQuery } from "@src/queries/Story/story.query";
import { getTimeAgo } from "@stubee2/stubee2-rolling-util";

export default function StoryStatus() {
  const { data: storyStatus } = useGetStoryMyStatusQuery({ suspense: true });
  const { count, lastModifiedDate } = storyStatus!!;
  return (
    <div>
      <S.StoryStatusContainer>
        <S.StoryStatus>
          <img src={printer} alt="이미지 없음" />
        </S.StoryStatus>
        <div>
          <S.StoryNumberText>
            내가 작성한 롤링 Story · {count}개
          </S.StoryNumberText>
          <S.StatusText>
            {count
              ? "최근 업데이트 " + getTimeAgo(lastModifiedDate)
              : "롤링한 회사가 없습니다."}
          </S.StatusText>
        </div>
      </S.StoryStatusContainer>
    </div>
  );
}
