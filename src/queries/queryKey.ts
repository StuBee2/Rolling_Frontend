export const QUERY_KEYS = Object.freeze({
  company: {
    getMyListCompany: "/company/my",
    getListSearchCompany: (name: string) => ["/company/search", name],
    getListCompany: "/company/list",
    getListCompanyId: (id: string) => ["/company/list/id", id],
    getListInfoCompanyId: (id: string) => ["/company/info/id", id],
    getCompanyRankTotal: "/company/rank/total",
    getCompanyRankSalaryBenefits: "/company/rank/salary-benefit",
    getCompanyRankCulture: "company/rank/culture",
    getCompanyRankCareer: "company/rank/career",
    getCompanyRankBalnce: "/company/rank/balnce",
    getCompanyRank: "/company/rank",
  },
  review: {
    getMyReview: "/review/my",
    getReviewListMemberId: (id: string) => ["/review/list/member/id", id],
    getReviewListCompanyId: (id: string) => ["/reivew/list/company/id", id],
    getReviewInfoId: (id: string) => ["/review/info/id", id],
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
