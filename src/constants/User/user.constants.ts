import review from "@src/assets/User/review.svg";
import smile from "@src/assets/User/smile.svg";

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
