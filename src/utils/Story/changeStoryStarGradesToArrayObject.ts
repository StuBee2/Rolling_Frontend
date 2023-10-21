import { StoryCommonType } from "@src/types/Story/story.type";

export const changeStoryStarGradesToArrayObject = (story: StoryCommonType) => {
  return [
    { id: 0, title: "총합", star: story?.total },
    { id: 1, title: "연봉", star: story?.salaryAndBenefits },
    { id: 2, title: "커리어 향상", star: story?.careerAdvancement },
    { id: 3, title: "워라벨", star: story?.workLifeBalance },
    { id: 4, title: "문화", star: story?.organizationalCulture },
  ];
};
