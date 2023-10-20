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
    getCompanyId: (id: string) => ["/company/list/id", id],
    getInfoCompanyId: (id: string) => ["/company/info/id", id],
    getCompanyRank: "/company/rank",
    getCompanyRankTotal: "/company/rank/total",
    getCompanyRankSalaryBenefits: "/company/rank/salary-benefit",
    getCompanyRankCulture: "/company/rank/culture",
    getCompanyRankCareer: "/company/rank/career",
    getCompanyRankBalnce: "/company/rank/balnce",
    getCompanyRankCategory: (category: string) => ["/company/rank", category],
  },
  review: {
    review: "/story",
    getMyReview: "/story/my",
    getReviewListMemberId: (id: string) => ["/story/list/member/id", id],
    getReviewListCompanyId: (id: string) => ["/story/list/company/id", id],
    getReviewInfoId: (id: string) => ["/story/info/id", id],
    getReviewMyStatus: "/story/my/status",
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
