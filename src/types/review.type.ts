export interface ReviewListType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  totalGrade: number;
  balanceGrade: number;
  salaryGrade: number;
  welfareGrade: number;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  companyId: string;
  companyName: string;
  companyImgUrl: string;
}

export interface ReviewInfoIdType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  reviewGrade: number;
  companyId: string;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  writerId: string;
  memberNickName: string;
  memberSocialId: string;
  memberImageUrl: string;
}
