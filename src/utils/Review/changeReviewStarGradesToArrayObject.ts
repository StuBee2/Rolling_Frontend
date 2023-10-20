import { StoryCommonType } from "@src/types/Review/review.type";

export const changeReviewStarGradesToArrayObject = (
  review: StoryCommonType
) => {
  return [
    { id: 0, title: "총합", star: review?.total },
    { id: 1, title: "연봉", star: review?.salaryAndBenefits },
    { id: 2, title: "커리어 향상", star: review?.careerAdvancement },
    { id: 3, title: "워라벨", star: review?.workLifeBalance },
    { id: 4, title: "문화", star: review?.organizationalCulture },
  ];
};
