export const QUERY_KEYS = Object.freeze({
  company: {
    getMyListCompany: "/company/my",
    getListSearchCompany: (name: string) => ["/company/search", name],
    getListCompany: "/company/list",
    getListCompanyId: (id: string) => ["/company/list/id", id],
    getListInfoCompanyId: (id: string) => ["/company/info/id", id],
    getCompanyRankWelfare: "/company/rank/welfare",
    getCompanyRankTotal: "/company/rank/total",
    getCompanyRankSalary: "/company/rank/Salary",
    getCompanyRankBalnce: "/company/rank/Balnce",
    deleteCompany: (id: string) => ["/company/companyId", id],
  },
  review: {
    getMyReview: "/review/my",
    getReviewListMemberId: (id: string) => ["/review/list/member/id", id],
    getReviewListCompanyId: (id: string) => ["/reivew/list/company/id", id],
    getReviewInfoId: (id: string) => ["/review/info/id", id],
    deleteReview: (id: string) => ["review/reviewId", id],
  },
  member: {
    getMyMember: "/member",
  },
});
