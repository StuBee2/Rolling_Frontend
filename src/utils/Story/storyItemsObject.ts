import cloud from "@src/assets/icons/Story/cloud.png";
import box from "@src/assets/icons/Story/box.png";
import blueHeart from "@src/assets/icons/Story/blueHeart.png";
import redHeart from "@src/assets/icons/Story/redHeart.png";
import { StoryItemType } from "@src/types/Story/story.type";

export const storyItemsObject = (item: StoryItemType) => {
  return [
    {
      id: 0,
      title: "우리 기업의 사내복지는",
      valueTitle: "welfare",
      icon: box,
      placeholder: "ex) 유연한 근무환경 제공",
      content: item.welfare,
    },
    {
      id: 1,
      prosTitle: "우리 기업의 장점은",
      prosValueTitle: "pros",
      prosPlaceholder: "기업의 장점을 입력해주세요",
      prosIcon: blueHeart,
      prosContent: item.pros,
      consTitle: "우리 기업의 단점은",
      consValueTitle: "cons",
      consPlaceholder: "기업의 단점을 입력해주세요",
      consIcon: redHeart,
      consContent: item.cons,
    },

    {
      id: 2,
      title: "나의 이야기를 롤링해",
      valueTitle: "etc",
      icon: cloud,
      placeholder: `면접 질문, 취업 준비 과정 등\n후배들에게 들려주고 싶은 이야기를 작성해 주세요`,
      content: item.etc,
    },
  ];
};
