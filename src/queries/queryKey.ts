export const QUERY_KEYS = Object.freeze({
  company: {
    getMyListCompany: "/company/my",
    getListSearchCompany: (name: string) => ["/company/search", name],
    getListCompany: "/company/list",
    getListCompanyId: (id: number) => ["/company/list/id", id],
    getListInfoCompanyId: (id: number) => ["/company/info/id", id],
    getCompanyRankWelfare: "/company/rank/welfare",
    getCompanyRankTotal: "/company/rank/total",
    getCompanyRankSalary: "/company/rank/Salary",
    getCompanyRankBalnce: "/company/rank/Balnce",
  },
  review: {
    getMyReview: "/review/my",
    getReviewListMemberId: (id: number) => ["/review/list/member/id", id],
    getReviewListCompanyId: (id: number) => ["/reivew/list/company/id", id],
    getReviewInfoId: (id: number) => ["/review/info/id", id],
  },
  member: {
    getMyMember: "/member",
  },
});
