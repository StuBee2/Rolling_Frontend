import process from "@src/assets/images/User/process.svg";
import school from "@src/assets/images/User/school.svg";
import preparation from "@src/assets/images/User/preparation.svg";
import interview from "@src/assets/images/User/interview.svg";
import blueHeart from "@src/assets/images/User/blueHeart.svg";
import welfare from "@src/assets/images/User/welfare.svg";
import { StoryItemType } from "@src/types/Review/review.type";

export const convertStoryItemsObject = (item: StoryItemType) => {
  return [
    {
      id: 0,
      title: "나의 학교 생활은 이랬어",
      icon: school,
      content: item.schoolLife,
    },
    {
      id: 1,
      title: "나의 취업 준비 과정은 이랬어",
      icon: preparation,
      content: item.preparationCourse,
    },
    {
      id: 2,
      title: "취업을 위한, 가장 중요한 점은",
      icon: blueHeart,
      content: item.mostImportantThing,
    },
    {
      id: 3,
      title: "채용 프로세스는 이랬어",
      icon: process,
      content: item.employmentProcess,
    },
    {
      id: 4,
      title: "면접 질문은 이랬어",
      icon: interview,
      content: item.interviewQuestion,
    },
    {
      id: 5,
      title: "사내 복지는 이런게 있어",
      icon: welfare,
      content: item.welfare,
    },
  ];
};
