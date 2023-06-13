interface Type {
  id: number;
  link: string;
  title: string;
}

export const USER_ITEMS: Type[] = [
  {
    id: 1,
    link: "/mypage",
    title: "마이 프로필",
  },
  {
    id: 2,
    link: "/myregist",
    title: "등록한 기업",
  },
  {
    id: 3,
    link: "/myreview",
    title: "리뷰한 기업",
  },
];
