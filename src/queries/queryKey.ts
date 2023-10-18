export const QUERY_KEYS = Object.freeze({
  company: {
    company: "/company",
    getMyListCompany: "/company/my",
    getListSearchCompany: (name: string) => ["/company/search", name],
    getListAllCompany: "/company/list/all",
    getListAllAndSearchCompany: (name: string) => [
      "/company/allAndSearch",
      name,
    ],
    getListCompanyId: (id: string) => ["/company/list/id", id],
    getListInfoCompanyId: (id: string) => ["/company/info/id", id],
    getCompanyRankTotal: "/company/rank/total",
    getCompanyRankSalaryBenefits: "/company/rank/salary-benefit",
    getCompanyRankCulture: "/company/rank/culture",
    getCompanyRankCareer: "/company/rank/career",
    getCompanyRankBalnce: "/company/rank/balnce",
    getCompanyRank: "/company/rank",
  },
  review: {
    review: "/review",
    getMyReview: "/review/my",
    getReviewListMemberId: (id: string) => ["/review/list/member/id", id],
    getReviewListCompanyId: (id: string) => ["/reivew/list/company/id", id],
    getReviewInfoId: (id: string) => ["/review/info/id", id],
    getReviewMyStatus: "/review/my/status",
  },
  member: {
    getMyMember: "/member",
  },
  news: {
    getNews: (companyName: string) => ["/news/companyName", companyName],
  },
  employment: {
    getMyEmploymentList: "/employment/my",
  },
});
