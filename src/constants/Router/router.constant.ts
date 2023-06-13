interface Type {
  path: string;
  page: number;
}

export const ROUTE_ITEMS: Type[] = [
  { path: "/mypage/profile", page: 0 },
  { path: "/mypage/myregist", page: 1 },
  { path: "/mypage/myreview", page: 2 },
];
