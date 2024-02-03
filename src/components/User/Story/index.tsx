import StoryItem from "@src/components/User/Story/StoryItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import { useGetMyStoryQuery } from "@src/services/Story/queries";

export default function Story() {
  const { data: storyList, fetchNextPage } = useGetMyStoryQuery();
  const [ref, inView] = useInView();
  const storyListData = storyList?.pages[0].data!!;
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      {storyListData?.length!! > 0 ? (
        <>
          <S.ListWrapper>
            {storyList?.pages.map((data) =>
              data.data.map((story) => (
                <StoryItem {...story} key={story.storyId} />
              ))
            )}
          </S.ListWrapper>
          <div ref={ref} />
        </>
      ) : (
        <p>지금 당장 스토리를 등록하세요!</p>
      )}
    </>
  );
}
