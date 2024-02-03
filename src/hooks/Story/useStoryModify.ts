import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { QUERY_KEYS } from "@src/services/queryKey";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StorySetupInitializationDotAtom } from "@src/stores/story/story.store";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useState } from "react";
import { StoryModifiableContentPatchType } from "@src/types/Story/story.type";
import { usePatchMyStoryMutation } from "@src/services/Story/mutations";

export const useStoryModify = () => {
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const patchMyStory = usePatchMyStoryMutation();

  const modifyStroyId = useRecoilValue(StoryModifiableIdAtom);
  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );
  const { position, cons, pros, welfare, etc } = storyModifiableContent;

  // 전 값과 비교를 하는 state
  const [prevStoryModifyInfo, setPrevStoryModifyInfo] =
    useState<StoryModifiableContentPatchType>({
      position: "",
      schoolLife: "",
      preparationCourse: "",
      employmentProcess: "",
      interviewQuestion: "",
      mostImportantThing: "",
      welfare: "",
      commuteTime: "",
      meal: "",
      pros: "",
      cons: "",
      etc: "",
    });

  const [storyStarGrade, setStoryStarGrade] = useState<Record<string, number>>({
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });
  const {
    salaryAndBenefits,
    workLifeBalance,
    organizationalCulture,
    careerAdvancement,
  } = storyStarGrade;

  const [prevStoryStarGrade, setPrevStoryStarGrade] = useState<
    Record<string, number>
  >({
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });

  const isStoryRequired =
    [position, cons, pros, welfare, etc].every(
      (value) => value.trim() !== ""
    ) &&
    JSON.stringify(storyModifiableContent) !==
      JSON.stringify(prevStoryModifyInfo);
  const isStarGradeRequired =
    [
      salaryAndBenefits,
      workLifeBalance,
      organizationalCulture,
      careerAdvancement,
    ].every((value) => value > 0) &&
    JSON.stringify(storyStarGrade) !== JSON.stringify(prevStoryStarGrade);

  const setIsModifiableEvent = useSetRecoilState(StoryModifiableEventAtom);
  const setIsClickDots = useSetRecoilState(StorySetupInitializationDotAtom);

  const handleChangeModifyStoryContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStoryModifiableContent({
      ...storyModifiableContent,
      [name]: value,
    });
  };

  const handleStarGradeChange = (name: string, grade: number) => {
    setStoryStarGrade((prev) => ({ ...prev, [name]: grade }));
  };

  const handleModifyStorySubmit = (
    e: React.FormEvent<HTMLFormElement>,
    modifyStoryCompanyId: string
  ) => {
    e.preventDefault();
    if (isStoryRequired || isStarGradeRequired) {
      const answer = window.confirm("기업을 수정하시겠습니까?");
      if (answer) {
        const param = {
          storyId: modifyStroyId,
          storyContent: { ...storyModifiableContent, ...storyStarGrade },
        };

        patchMyStory.mutate(param, {
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
        });
        setIsClickDots(false);
        setIsModifiableEvent(false);
      }
    }
  };

  return {
    handleChangeModifyStoryContent,
    handleModifyStorySubmit,

    prevStoryModifyInfo,
    setPrevStoryModifyInfo,

    storyModifiableContent,
    setStoryModifiableContent,

    storyStarGrade,
    setStoryStarGrade,

    prevStoryStarGrade,
    setPrevStoryStarGrade,

    handleStarGradeChange,
    isStoryRequired,
    isStarGradeRequired,
  };
};
