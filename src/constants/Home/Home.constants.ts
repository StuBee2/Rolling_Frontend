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

export const HOME_ITEMS = [
  {
    id: 0,
    imgUrl:
      "https://storage.thewatermelon.com/wp-content/uploads/2021/11/20145412/Web-Goodchoice-01-scaled.jpg",
    name: "여기어때",
    createdAt: "2023년 8월 24일",
    description: "올겨울 혼자어때 둘이어때 셋이어때",
    address: "서울특별시 강남구 봉은사로 479",
  },
  {
    id: 1,
    imgUrl:
      "https://blog.kakaocdn.net/dn/nZJc9/btrl4yn2Mp3/R2UUZ7VvLdc7opRUuCyiS1/img.jpg",
    name: "무신사",
    createdAt: "2023년 8월 24일",
    description: "MUSINSA",
    address: "서울시 성동구 아차산로 13길 11, 1층",
  },
  {
    id: 2,
    imgUrl:
      "https://blog.kakaocdn.net/dn/0aDVr/btrbQaX9WJr/p63pboivEKfeoYcIDKQYN1/img.jpg",
    name: "원티드",
    createdAt: "2023년 8월 24일",
    description: "WANTED",
    address: "서울 송파구 올림픽로 300, 35층",
  },
  {
    id: 3,
    imgUrl:
      "https://img.etnews.com/news/article/2022/11/28/article_28104211336915.png",
    name: "정육각",
    createdAt: "2023년 8월 24일",
    description: "가장 신선하고 빠른 정육점",
    address: "경기도 김포시 고촌읍 아라육로57번길 126",
  },
  {
    id: 4,
    imgUrl:
      "https://i.namu.wiki/i/LNE8kaYxqezloKx24xOMHt6qhz2Ct2tO66OOU9ju1_ENw76x7RZ8iwQWX1U_zbfoSgvwDJZYen65fs_alrxPBQ.webp",
    name: "Quota Book",
    createdAt: "2023년 8월 24일",
    description: "SaaS 기반 증권 관리 플랫폼",
    address: "서울 강남구 테헤란로86길 14, 8층",
  },
  {
    id: 5,
    imgUrl:
      "https://cdn.bizwatch.co.kr/news/photo/2022/09/05/b056d82a574f458946063dd8d2740334.jpg",
    name: "toss",
    createdAt: "2023년 8월 24일",
    description: "모바일 결제 및 송금 서비스",
    address: "서울 강남구 테헤란로 142, 4층",
  },
];
