import StoryItem from "@src/components/User/Story/StoryItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import { useGetStoryListCompanyIdQuery } from "@src/services/Story/queries";
import { Column } from "@src/styles/flex";

interface Props {
  companyId: string;
}

const CompanyDetailStory = ({ companyId }: Props) => {
  const { data: storyList, fetchNextPage } = useGetStoryListCompanyIdQuery(
    {
      id: companyId,
    },
    { suspense: true }
  );
  const [ref, inView] = useInView();
  const storyListData = storyList?.pages[0].data;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Column $width={"100%"} $rowGap={"2rem"}>
      <S.StoryTitle>
        <p>졸업생들의 롤링 Story ·</p>
        <S.StoryCount>{storyListData?.length}</S.StoryCount>
      </S.StoryTitle>
      <Column $width={"100%"} $rowGap={"3rem"}>
        {storyListData?.length!! > 0 ? (
          storyList?.pages.map((list) =>
            list.data.map((item) => (
              <StoryItem key={item.storyId} companyId={companyId} {...item} />
            ))
          )
        ) : (
          <p>등록된 스토리가 없습니다.</p>
        )}
      </Column>
      <div ref={ref} />
    </Column>
  );
};

export default CompanyDetailStory;
