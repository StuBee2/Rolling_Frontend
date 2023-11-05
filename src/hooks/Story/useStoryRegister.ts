import { usePostStoryMutation } from "@src/queries/Story/story.query";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { StoryParam } from "@src/repositories/Story/story.repository";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { StoryRegistRequireType } from "@src/types/Story/story.type";
import { StoryPagePathInflow } from "@src/stores/story/story.store";
import { useRecoilState } from "recoil";

export const useStoryRegister = (companyId: string) => {
  const [storyRequiredElement, setStoryRequiredElement] =
    useState<StoryRegistRequireType>({
      position: "",
      welfare: "",
      pros: "",
      cons: "",
    });

  const [storyPagePathInflow, setStoryPagePathInflow] =
    useRecoilState(StoryPagePathInflow);

  const [storyOptionElements, setStoryOptionElements] = useState({
    corporationEtc: "",
  });

  const [storyStarGrade, setStoryStarGrade] = useState<Record<string, number>>({
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });

  const isRequired =
    Object.values(storyRequiredElement).every((value) => value.trim()) &&
    Object.values(storyStarGrade).every((value) => value);

  const postStory = usePostStoryMutation();
  const { queryInvalidates } = useQueryInvalidates();
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();

  const handleStarGradeChange = (name: string, grade: number) => {
    setStoryStarGrade((prev) => ({ ...prev, [name]: grade }));
  };

  const handleStoryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    require?: boolean
  ) => {
    const { name, value } = e.target;

    if (require) {
      setStoryRequiredElement((prev) => ({ ...prev, [name]: value }));
    } else {
      setStoryOptionElements((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleStorySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRequired) {
      const answer = window.confirm("스토리를 남기시겠습니까?");

      if (answer) {
        const param = {
          companyId,
          ...storyRequiredElement,
          ...storyOptionElements,
          ...storyStarGrade,
          schoolLife: "",
          preparationCourse: "",
          employmentProcess: "",
          interviewQuestion: "",
          mostImportantThing: "",
          commuteTime: "",
          meal: "",
        };

        postStory.mutate(param as unknown as StoryParam, {
          onSuccess: () => {
            rollingToast("스토리를 등록하였습니다!", "success");

            queryInvalidates([
              QUERY_KEYS.story.getMyStory,
              QUERY_KEYS.story.getStoryListCompanyId(companyId),
              QUERY_KEYS.story.getStoryMyStatus,
            ]);

            if (storyPagePathInflow === "detail") {
              setStoryPagePathInflow("header");
              navigate(-1);
            } else {
              navigate("/");
            }
          },
          onError: (e) => {
            rollingToast("스토리를 등록하지 못했습니다.", "error");
          },
        });
      }
    }
  };

  return {
    storyStarGrade,
    handleStarGradeChange,

    storyRequiredElement,
    storyOptionElements,
    handleStoryChange,

    isRequired,
    handleStorySubmit,

    setStoryRequiredElement,
    setStoryOptionElements,
    setStoryStarGrade,
  };
};
