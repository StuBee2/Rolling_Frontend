import Token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../Auth/auth.constant";

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
  {
    id: 1,
    name: "취업 맵",
    link: "/map",
  },
  {
    id: 2,
    name: Token.getToken(ACCESS_TOKEN_KEY) ? "기업 등록" : "",
    link: Token.getToken(ACCESS_TOKEN_KEY) ? "/register" : "",
  },
];
