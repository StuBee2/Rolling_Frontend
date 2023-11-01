import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { StoryModifiableInfoAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { usePutMyStoryMutation } from "@src/queries/Story/story.query";
import { StoryParam } from "@src/repositories/Story/story.repository";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { StoryModifiableContentPutType } from "@src/types/Story/story.type";

export const useEditStory = () => {
  const { rollingToast } = useRollingToast();
  const putStory = usePutMyStoryMutation();
  const [storyModifiableInfo, setStoryModifiableInfo] = useRecoilState(
    StoryModifiableInfoAtom
  );

  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );

  const storyId = useRecoilValue(StoryModifiableIdAtom);
  const storyModifyInfo = useRecoilValue(StoryModifiableInfoAtom);
  const storyModifyContent = useRecoilValue(StoryModifiableContentAtom);

  const [storyContent, setStoryContent] =
    useState<StoryModifiableContentPutType>({
      position: storyModifyInfo.position,
      schoolLife: storyModifyContent.schoolLife,
      preparationCourse: storyModifyContent.preparationCourse,
      employmentProcess: storyModifyContent.employmentProcess,
      interviewQuestion: storyModifyContent.interviewQuestion,
      mostImportantThing: storyModifyContent.mostImportantThing,
      welfare: storyModifyContent.welfare,
      commuteTime: storyModifyInfo.commuteTime,
      meal: storyModifyInfo.meal,
      pros: "",
      cons: "",
      etc: "",
      salaryAndBenefits: 5,
      workLifeBalance: 5,
      organizationalCulture: 5,
      careerAdvancement: 5,
    });

  // console.log(storyContent);

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

  const handleModifyStorySubmit = (e: React.FormEvent) => {
    // e.preventDefault();

    putStory.mutate(
      { storyId, storyContent },
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

  // const handleModifyCompanyStorySubmit = () => {};
  return {
    handleModifyStoryInfoValue,
    handleModifyStoryContentValue,
    handleModifyStorySubmit,
  };
};
