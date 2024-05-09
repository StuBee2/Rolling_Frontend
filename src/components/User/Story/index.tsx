import StoryItem from "@src/components/User/Story/StoryItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetMyStoryQuery } from "@src/services/Story/queries";
import { Row } from "@src/styles/flex";

const Story = () => {
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
      {storyListData?.length!! > 0 ? (
        <>
          <Row
            $width={"100%"}
            $wrap={"wrap"}
            $rowGap={"3rem"}
            $justifyContent={"center"}
          >
            {storyList?.pages.map((data) =>
              data.data.map((story) => (
                <StoryItem {...story} key={story.storyId} />
              ))
            )}
          </Row>
          <div ref={ref} />
        </>
      ) : (
        <p>지금 당장 스토리를 등록하세요!</p>
      )}
    </>
  );
};

export default Story;
