import { LoggingParam } from "../../repositories/Logging/log.repository";

export const LOG_ITEM: LoggingParam[] = [
  {
    description: "기업상세 페이지로 이동",
    module: "WEB",
    page: "/detail",
  },
  {
    description: "마이 페이지로 이동",
    module: "WEB",
    page: "/mypage/profile",
  },
  {
    description: "기업등록 페이지로 이동",
    module: "WEB",
    page: "/register",
  },
  {
    description: "기업리뷰 페이지로 이동",
    module: "WEB",
    page: "/review",
  },
];
