import setting from "@src/assets/icons/Story/setting.png";
import school from "@src/assets/icons/Story/school.png";
import cloud from "@src/assets/icons/Story/cloud.png";
import loudSpeaker from "@src/assets/icons/Story/loudSpeaker.png";
import blueHeart from "@src/assets/icons/Story/blueHeart.png";
import good from "@src/assets/icons/Story/good.png";
import { StoryItemType } from "@src/types/Story/story.type";

export const storyItemsObject = (item: StoryItemType) => {
  return [
    {
      id: 0,
      title: "나의 학교 생활은 이랬어",
      valueTitle: "schoolLife",
      icon: school,
      content: item.schoolLife,
    },
    {
      id: 1,
      title: "나의 취업 준비 과정은 이랬어",
      valueTitle: "preparationCourse",
      icon: cloud,
      content: item.preparationCourse,
    },
    {
      id: 2,
      title: "취업을 위한, 가장 중요한 점은",
      valueTitle: "mostImportantThing",
      icon: blueHeart,
      content: item.mostImportantThing,
    },
    {
      id: 3,
      title: "채용 프로세스는 이랬어",
      valueTitle: "employmentProcess",
      icon: setting,
      content: item.employmentProcess,
    },
    {
      id: 4,
      title: "면접 질문은 이랬어",
      valueTitle: "interviewQuestion",
      icon: loudSpeaker,
      content: item.interviewQuestion,
    },
    {
      id: 5,
      title: "사내 복지는 이런게 있어",
      valueTitle: "welfare",
      icon: good,
      content: item.welfare,
    },
  ];
};
