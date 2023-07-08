interface Type {
  id: number;
  link: string;
  title: string;
}

export const USER_ITEMS: Type[] = [
  {
    id: 1,
    link: "/mypage/profile",
    title: "마이 프로필",
  },
  {
    id: 2,
    link: "/mypage/regist",
    title: "등록한 기업",
  },
  {
    id: 3,
    link: "/mypage/review",
    title: "리뷰한 기업",
  },
];
