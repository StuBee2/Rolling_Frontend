interface Type {
  id: number;
  categoryName?: string;
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
  },
  {
    id: 3,
    categoryName: "Review",
  },
  {
    id: 4,
    categoryName: "Logout",
  },
];
