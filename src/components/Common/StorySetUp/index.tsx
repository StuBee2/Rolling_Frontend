import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_STORY_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpStory } from "@src/hooks/Story/useSetUpStory";
import { StoryModifiablePageAtom } from "@src/stores/story/story.store";
import { StorySetupInitializationDotAtom } from "@src/stores/story/story.store";

interface Props {
  storyId: string;
  companyId: string;
}

export default function StorySetUp({ ...attr }: Props) {
  const { setIsClickDots, hanldeStorySetUpClick } = useSetUpStory();
  const { storyId, companyId } = attr;

  const modifyActivationPage = useRecoilValue(StoryModifiablePageAtom);
  const isClickDots = useRecoilValue(StorySetupInitializationDotAtom);
  const [userStorySetupItemsSlice, SetUserStorySetupItemsSlice] =
    useState<number>(0);

  useEffect(() => {
    if (modifyActivationPage) {
      SetUserStorySetupItemsSlice(0);
    } else {
      SetUserStorySetupItemsSlice(1);
    }
  }, [modifyActivationPage]);

  const renderBiDotsVerticalRounded = () => {
    return (
      <>
        <S.SetUpIconContainer>
          <BiDotsVerticalRounded
            size={25}
            cursor="pointer"
            onClick={() => setIsClickDots(true)}
          />
        </S.SetUpIconContainer>
      </>
    );
  };

  const renderSetupIconItems = () => {
    return (
      <>
        {USER_STORY_SETUP_ITEMS.slice(userStorySetupItemsSlice).map((item) => (
          <S.Icon
            key={item.id}
            src={item.image}
            onClick={() => hanldeStorySetUpClick(item.id, storyId, companyId)}
            alt="이미지 없음"
          />
        ))}
      </>
    );
  };

  return (
    <>
      {isClickDots && storyId !== null
        ? renderSetupIconItems()
        : renderBiDotsVerticalRounded()}
    </>
  );
}
