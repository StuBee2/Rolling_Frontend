import regist from "../../assets/User/regist.svg";
import review from "../../assets/User/review.svg";
import smile from "../../assets/User/smile.svg";

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
    link: "/mypage/employment",
    image: regist,
    title: "등록한 기업",
  },
  {
    id: 3,
    link: "/mypage/review",
    image: review,
    title: "리뷰한 기업",
  },
];
