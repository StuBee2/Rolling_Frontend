interface Type {
  id: number;
  categoryName: string;
  categoryPath?: string;
}
export const CATEGROY_ITEMS: Type[] = [
  {
    id: 1,
    categoryName: "Login",
    categoryPath: "/login",
  },
  {
    id: 2,
    categoryName: "MyPage",
    categoryPath: "/mypage",
  },
  {
    id: 3,
    categoryName: "Review",
    categoryPath: "/register",
  },
  {
    id: 4,
    categoryName: "Logout",
  },
];
