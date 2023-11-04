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
      content: item.welfare,
    },
    {
      id: 1,
      prosTitle: "우리 기업의 장점은",
      prosValueTitle: "pros",
      prosIcon: blueHeart,
      prosContent: item.pros,
      consTitle: "우리 기업의 단점은",
      consValueTitle: "cons",
      consIcon: redHeart,
      consContent: item.cons,
    },

    {
      id: 2,
      title: "나의 이야기를 롤링해",
      valueTitle: "etc",
      icon: cloud,
      content: item.etc,
    },
  ];
};
