import review from "@src/assets/User/review.svg";
import smile from "@src/assets/User/smile.svg";
import edit from "@src/assets/User/edit.svg";
import del from "@src/assets/User/del.svg";
import cancel from "@src/assets/User/cancel.svg";

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
    image: smile,
    title: "마이 프로필",
  },
  {
    id: 2,
    link: "/mypage/review",
    image: review,
    title: "리뷰한 기업",
  },
];

export const USER_REVIEW_SETUP_ITEMS = [
  // {
  //   id: 0,
  //   image: edit,
  // },
  {
    id: 1,
    image: del,
  },
  {
    id: 2,
    image: cancel,
  },
];
