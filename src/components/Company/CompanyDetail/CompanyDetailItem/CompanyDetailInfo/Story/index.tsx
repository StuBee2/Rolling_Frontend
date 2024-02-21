import StoryItem from "@src/components/User/Story/StoryItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import { useGetStoryListCompanyIdQuery } from "@src/services/Story/queries";

interface Props {
  companyId: string;
}

export default function CompanyDetailStory({ companyId }: Props) {
  const { data: storyList, fetchNextPage } = useGetStoryListCompanyIdQuery({
    id: companyId,
  });
  const [ref, inView] = useInView();
  const storyListData = storyList?.pages[0].data;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.Container>
      <S.StoryTitle>
        <p>졸업생들의 롤링 Story ·</p>
        <S.StoryCount>{storyListData?.length}</S.StoryCount>
      </S.StoryTitle>
      <S.Wrapper>
        {storyListData?.length!! > 0 ? (
          storyList?.pages.map((list) =>
            list.data.map((item) => (
              <StoryItem key={item.storyId} companyId={companyId} {...item} />
            ))
          )
        ) : (
          <p>등록된 스토리가 없습니다.</p>
        )}
      </S.Wrapper>
      <div ref={ref} />
    </S.Container>
  );
}
