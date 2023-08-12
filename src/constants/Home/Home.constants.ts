import design from "@src/assets/Home/design.svg";
import marketing from "@src/assets/Home/marketing.svg";
import develop from "@src/assets/Home/develop.svg";
import plan from "@src/assets/Home/plan.svg";

export interface Type {
  id: number;
  categoryName?: string;
  name?: string;
  image?: string;
}

export const CATEGORY_ITEMS: Type[] = [
  {
    id: 0,
    categoryName: "Login",
  },
  {
    id: 1,
    categoryName: "MyPage",
  },
  {
    id: 2,
    categoryName: "Register",
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

export const HOME_NAV_COMPANY_ITEMS: Type[] = [
  {
    id: 0,
    name: "스타트업",
  },
  {
    id: 1,
    name: "요즘 뜨는 기업",
  },
  {
    id: 2,
    name: "내 주변 기업",
  },
];

export const HOME_NAV_FIELD_ITEMS: Type[] = [
  {
    id: 0,
    name: "개발",
    image: develop,
  },
  {
    id: 1,
    name: "기획",
    image: plan,
  },
  {
    id: 2,
    name: "디자인",
    image: design,
  },
  {
    id: 3,
    name: "마케팅",
    image: marketing,
  },
];

export const HOME_COMPANY_RANK_ITMES: Type[] = [
  {
    id: 0,
    name: "총합순위",
    categoryName: "total",
  },
  {
    id: 1,
    name: "균형순위",
    categoryName: "balance",
  },
  {
    id: 2,
    name: "연봉순위",
    categoryName: "salary-benefits",
  },
  {
    id: 3,
    name: "커리어순위",
    categoryName: "career",
  },
  {
    id: 4,
    name: "문화순위",
    categoryName: "culture",
  },
];
