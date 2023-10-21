import { StoryCompanyContentsType } from "@src/types/Story/story.type";
import { usePostStoryMutation } from "@src/queries/Story/story.query";
import { useState } from "react";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { StoryParam } from "@src/repositories/Story/story.repository";
import axios, { AxiosError } from "axios";
import { storyErrorHanlder } from "@src/utils/Error/Story/storyErrorHanlder";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { CompanyStoryRegistModalAtom } from "@src/stores/company/company.store";
import { useSetRecoilState } from "recoil";
import { POSITION_ITEMS } from "@src/constants/Position/position.constant";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

export const useRegistStory = (companyId: string) => {
  const postStory = usePostStoryMutation();
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const setIsCompanyStoryRegisterModal = useSetRecoilState(
    CompanyStoryRegistModalAtom
  );

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

  const handleCompanyStoryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setStoryContents((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      const regex =
        /^(오전|오후)?\s(1?[0-9]|2[0-4])시 ~ (오전|오후)?\s(1?[0-9]|2[0-4])시/;

      if (!POSITION_ITEMS.some((item) => item === attr.position)) {
        return rollingToast("입력하신 포지션이 없습니다!", "warning");
      }

      if (attr.schoolLife.trim() === "") {
        return rollingToast("학교생활을 작성해주세요!", "warning");
      }

      if (attr.preparationCourse.trim() === "") {
        return rollingToast("취업 준비 과정을 작성해주세요!", "warning");
      }

      if (attr.employmentProcess.trim() === "") {
        return rollingToast("채용 프로세스을 작성해주세요!", "warning");
      }

      if (attr.interviewQuestion.trim() === "") {
        return rollingToast("면접 질문을 작성해주세요!", "warning");
      }

      if (attr.mostImportantThing.trim() === "") {
        return rollingToast(
          "자신이 생각하는 가장 중요한 점을 작성해주세요!",
          "warning"
        );
      }

      if (attr.welfare.trim() === "") {
        return rollingToast("사내 복지를 작성해주세요!", "warning");
      }

      if (attr.meal.trim() === "") {
        return rollingToast("식사 제공 여부를 작성해주세요!", "warning");
      }

      if (attr.commuteTime.trim() === "") {
        return rollingToast("출퇴근 시간을 작성해주세요!", "warning");
      }

      if (!attr.commuteTime.trim().match(regex)) {
        return rollingToast(
          "오전/오후 몇시 ~ 오전/오후 몇시 형식으로 맞춰주세요",
          "warning"
        );
      }

      if (attr.advantages.trim() === "") {
        return rollingToast("회사 장점을 작성해주세요!", "warning");
      }

      if (attr.disAdvantages.trim() === "") {
        return rollingToast("회사 단점을 작성해주세요!", "warning");
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
  };
};
