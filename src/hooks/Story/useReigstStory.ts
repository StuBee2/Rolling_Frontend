import { usePostStoryMutation } from "@src/queries/Story/story.query";
import { useRef, useState } from "react";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { StoryParam } from "@src/repositories/Story/story.repository";
import axios, { AxiosError } from "axios";
import { storyErrorHanlder } from "@src/utils/Error/Story/storyErrorHanlder";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useSetRecoilState } from "recoil";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";
import {
  StoryCompanyContentsType,
  StoryInputRefType,
} from "@src/types/Story/story.type";
import { StoryRegistModalAtom } from "@src/stores/story/story.store";

export const useRegistStory = (companyId: string) => {
  const postStory = usePostStoryMutation();
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const setIsCompanyStoryRegisterModal =
    useSetRecoilState(StoryRegistModalAtom);

  const [storyContents, setStoryContents] = useState<StoryCompanyContentsType>({
    position: "",
    schoolLife: "",
    preparationCourse: "",
    employmentProcess: "",
    interviewQuestion: "",
    mostImportantThing: "",
    welfare: "",
    meal: "",
    commuteTime: "",
    advantages: "",
    disAdvantages: "",
  });

  const [storyStarGrade, setStoryStarGrade] = useState<Record<string, number>>({
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });

  const inputRefs: StoryInputRefType = {
    position: useRef<HTMLInputElement>(null),
    schoolLife: useRef<HTMLInputElement>(null),
    preparationCourse: useRef<HTMLInputElement>(null),
    mostImportantThing: useRef<HTMLInputElement>(null),
    employmentProcess: useRef<HTMLInputElement>(null),
    interviewQuestion: useRef<HTMLInputElement>(null),
  };

  const [isError, setIsError] = useState({
    position: false,
    schoolLife: false,
    preparationCourse: false,
    employmentProcess: false,
    interviewQuestion: false,
    mostImportantThing: false,
  });

  const handleCompanyStoryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    isError?: boolean
  ) => {
    const { name, value } = e.target;
    setStoryContents((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isError && value !== "") {
      setIsError((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleStarGradeChange = (name: string, grade: number) => {
    setStoryStarGrade((prev) => ({ ...prev, [name]: grade }));
  };

  const handleCompanyStorySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("리뷰를 등록하시겠습니까?");
    if (answer) {
      const { ...attr } = storyContents;
      const {
        salaryAndBenefits,
        workLifeBalance,
        organizationalCulture,
        careerAdvancement,
      } = storyStarGrade;

      if (attr.position === "") {
        setIsError((prev) => ({ ...prev, position: true }));
        return inputRefs.position.current?.focus();
      }

      if (attr.schoolLife.trim() === "") {
        setIsError((prev) => ({ ...prev, schoolLife: true }));
        return inputRefs.schoolLife.current?.focus();
      }

      if (attr.preparationCourse.trim() === "") {
        setIsError((prev) => ({ ...prev, preparationCourse: true }));
        return inputRefs.preparationCourse.current?.focus();
      }

      if (attr.employmentProcess.trim() === "") {
        setIsError((prev) => ({ ...prev, employmentProcess: true }));
        return inputRefs.employmentProcess.current?.focus();
      }

      if (attr.interviewQuestion.trim() === "") {
        setIsError((prev) => ({ ...prev, interviewQuestion: true }));
        return inputRefs.interviewQuestion.current?.focus();
      }

      if (attr.mostImportantThing.trim() === "") {
        setIsError((prev) => ({ ...prev, mostImportantThing: true }));
        return inputRefs.mostImportantThing.current?.focus();
      }

      // 만족도 별점 0점 검증
      if (workLifeBalance === 0) {
        return rollingToast("워라벨 만족도 별점을 매겨주세요!", "warning");
      }

      if (salaryAndBenefits === 0) {
        return rollingToast("연봉 만족도 별점을 매겨주세요!", "warning");
      }

      if (careerAdvancement === 0) {
        return rollingToast("커리어 향상 만족도 별점을 매겨주세요!", "warning");
      }

      if (organizationalCulture === 0) {
        return rollingToast("조직문화 만족도 별점을 매겨주세요!", "warning");
      }

      const param = {
        companyId,
        ...storyContents,
        ...storyStarGrade,
      };

      postStory.mutate(param as unknown as StoryParam, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.story.getMyStory,
            QUERY_KEYS.story.getStoryListCompanyId(companyId),
            QUERY_KEYS.story.getStoryMyStatus,
          ]);
          turnOffModal(setIsCompanyStoryRegisterModal);
          rollingToast("리뷰를 등록하였습니다.", "success");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data as AxiosError;
            rollingToast(storyErrorHanlder(Number(status), message), "error");
          }
        },
      });
    }
  };

  return {
    setStoryContents,
    storyContents,
    storyStarGrade,
    handleCompanyStoryChange,
    handleStarGradeChange,
    handleCompanyStorySubmit,
    isError,
    setIsError,
    inputRefs,
  };
};
