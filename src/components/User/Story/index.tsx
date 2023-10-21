import StoryItem from "@src/components/User/Story/StoryItem";
import { useGetMyStoryQuery } from "@src/queries/Story/story.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import * as S from "./style";

export default function Story() {
  const { data: storyList, fetchNextPage } = useGetMyStoryQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();
  const storyListData = storyList?.pages[0].data!!;
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <S.ListWrapper>
        {storyListData?.length!! > 0 ? (
          storyList?.pages.map((data) =>
            data.data.map((story) => (
              <StoryItem {...story} key={story.storyId} />
            ))
          )
        ) : (
          <div>롤링한 기업이 없습니다.</div>
        )}
      </S.ListWrapper>
      <div ref={ref} />
    </>
  );
}
