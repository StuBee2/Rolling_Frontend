import { useRecoilState, useRecoilValue } from "recoil";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { usePutMyStoryMutation } from "@src/queries/Story/story.query";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StorySetupInitializationDotAtom } from "@src/stores/story/story.store";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { FormEvent } from "react";

export const useStoryModify = () => {
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const putStory = usePutMyStoryMutation();

  const modifyStroyId = useRecoilValue(StoryModifiableIdAtom);
  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );

  const [isModifiableEvent, setIsModifiableEvent] = useRecoilState(
    StoryModifiableEventAtom
  );
  const [isClickDots, setIsClickDots] = useRecoilState(
    StorySetupInitializationDotAtom
  );

  const handleChangeModifyStoryContent = (name: string, value: string) => {
    console.log(name, value);
    setStoryModifiableContent({
      ...storyModifiableContent,
      [name]: value,
    });
  };
  const handleModifyStorySubmit = (
    e: React.FormEvent<HTMLFormElement>,
    modifyStoryCompanyId: string
  ) => {
    e.preventDefault();
    putStory.mutate(
      { storyId: modifyStroyId, storyContent: storyModifiableContent },
      {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.story.getMyStory,
            QUERY_KEYS.story.getStoryListCompanyId(modifyStoryCompanyId),
          ]);
          rollingToast("스토리가 수정되었습니다", "success");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
    setIsClickDots(false);
    setIsModifiableEvent(false);
  };

  return {
    handleChangeModifyStoryContent,
    handleModifyStorySubmit,
  };
};
