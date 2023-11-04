interface Type {
  id: number;
  name: string;
  link: string;
}

export const HEADER_ITEMS: Type[] = [
  {
    id: 0,
    name: "홈 피드",
    link: "/",
  },
  // {
  //   id: 1,
  //   name: "취업 맵",
  //   link: "/map",
  // },
  {
    id: 1,
    name: "스토리 등록",
    link: "/story",
  },
];
