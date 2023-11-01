import idCard from "@src/assets/icons/Story/idCard.png";
import smileFace from "@src/assets/icons/Home/smileFace.png";
import edit from "@src/assets/images/User/edit.svg";
import del from "@src/assets/images/User/del.svg";
import cancel from "@src/assets/images/User/cancel.svg";

interface Type {
  id: number;
  link: string;
  image: string;
  title: string;
}

export const USER_ITEMS: Type[] = [
  {
    id: 1,
    link: "/mypage/profile",
    image: smileFace,
    title: "마이 프로필",
  },
  {
    id: 2,
    link: "/mypage/story",
    image: idCard,
    title: "롤링한 기업",
  },
];

export const USER_STORY_SETUP_ITEMS = [
  {
    id: 0,
    image: edit,
  },
  {
    id: 1,
    image: del,
  },
  {
    id: 2,
    image: cancel,
  },
];
