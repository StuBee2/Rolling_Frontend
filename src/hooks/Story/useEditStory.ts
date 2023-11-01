import React from "react";
import { useRecoilState } from "recoil";
import { StoryModifiableInfoAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { usePutMyStoryMutation } from "@src/queries/Story/story.query";
import { StoryParam } from "@src/repositories/Story/story.repository";

export const useEditStory = () => {
  const putStory = usePutMyStoryMutation();
  const [storyModifiableInfo, setStoryModifiableInfo] = useRecoilState(
    StoryModifiableInfoAtom
  );

  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );

  const handleModifyStoryInfoValue = (name: string, value: string) => {
    console.log(name, value);
    setStoryModifiableInfo({
      ...storyModifiableInfo,
      [name]: value,
    });
  };

  const handleModifyStoryContentValue = (
    valueTitle: string,
    storyModifiableContentValue: string
  ) => {
    console.log(valueTitle, storyModifiableContentValue);
    setStoryModifiableContent({
      ...storyModifiableContent,
      [valueTitle]: storyModifiableContentValue,
    });
  };

  // const handleModifyCompanyStorySubmit = () => {};
  return { handleModifyStoryInfoValue, handleModifyStoryContentValue };
};
