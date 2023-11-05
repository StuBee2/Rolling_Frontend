import * as S from "./style";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_STORY_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpStory } from "@src/hooks/Story/useSetUpStory";

interface Props {
  storyId: string;
  companyId: string;
  isCoincideStoryId: boolean;
}

export default function StorySetUp({ ...attr }: Props) {
  const { ...hooks } = useSetUpStory();
  const { storyId, companyId, isCoincideStoryId } = attr;

  return (
    <>
      {hooks.isClickDots && isCoincideStoryId ? (
        <>
          {USER_STORY_SETUP_ITEMS.map((item) => (
            <S.Icon
              key={item.id}
              src={item.image}
              onClick={() =>
                hooks.hanldeStorySetUpClick(item.id, storyId, companyId)
              }
              alt="이미지 없음"
            />
          ))}
        </>
      ) : (
        <S.SetUpIconContainer>
          <BiDotsVerticalRounded
            size={25}
            cursor="pointer"
            onClick={() => {
              hooks.setIsClickDots(true);
              hooks.setModifyStoryId(storyId);
            }}
          />
        </S.SetUpIconContainer>
      )}
    </>
  );
}
