import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { usePutMyStoryMutation } from "@src/queries/Story/story.query";
import { StoryParam } from "@src/repositories/Story/story.repository";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

export const useEditStory = () => {
  const { rollingToast } = useRollingToast();
  const putStory = usePutMyStoryMutation();

  const storyId = useRecoilValue(StoryModifiableIdAtom);
  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );

  const handleChangeModifyStoryContent = (name: string, value: string) => {
    console.log(name, value);
    setStoryModifiableContent({
      ...storyModifiableContent,
      [name]: value,
    });
  };
  const handleModifyStorySubmit = (e: React.FormEvent) => {
    putStory.mutate(
      { storyId: storyId, storyContent: storyModifiableContent },
      {
        onSuccess: () => {
          rollingToast("스토리가 수정되었습니다", "success");
        },
        onError: (e) => {
          console.log(e);
        },
      }
    );
  };

  return {
    handleChangeModifyStoryContent,
    handleModifyStorySubmit,
  };
};
