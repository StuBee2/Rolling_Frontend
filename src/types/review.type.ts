export interface ReviewListType {
  id: string;
  content: string;
  position: string;
  careerPath: string;
  grade: number;
  memberId: string;
  companyId: string;
  createdAt: string;
  modifiedAt: string;
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
