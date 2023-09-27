export interface ReviewInfiniteScrollListType {
  data: ReviewListType[];
  nextPage: number;
}

export interface ReviewInfoIdInfiniteScrollListType {
  data: ReviewInfoIdType[];
  nextPage: number;
}

export interface ReviewListType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  totalGrade: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  companyId: string;
  companyName: string;
  companyImgUrl: string;
  employmentStatus: "HOLD" | "QUIT";
}

export interface ReviewInfoIdType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  totalGrade: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  writerId: string;
  memberNickName: string;
  memberSocialId: string;
  memberImageUrl: string;

  companyId?: string;
}

export interface ReviewPostResponse {
  reviewId: {
    id: string;
  };
  reviewDetails: {
    content: string;
    position: string;
    careerPath: string;
    createdAt: string;
    modifiedAt: string;
  };
  reviewGrades: {
    totalGrade: number;
    salaryAndBenefits: number;
    workLifeBalance: number;
    organizationalCulture: number;
    careerAdvancement: number;
  };
  memberId: {
    id: string;
  };
  companyId: {
    id: string;
  };
}

export interface ReviewCompanyInfoType {
  companyName: string;
  companyLogo: string;
  companyId: string;
}

export interface ReviewCompanyContentsType {
  content: string;
  position: string;
  careerPath: string;
}
