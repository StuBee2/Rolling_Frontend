import { CompanyStarGrade } from "../Company/company.type";

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

  //reivew를 삭제할 때 필요한 companyId를 옵셔널로 지정함
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
  reviewGrades: CompanyStarGrade;
  memberId: {
    id: string;
  };
  companyId: {
    id: string;
  };
}

export interface ReviewMyStatusResponse {
  count: number;
  lastModifiedDate: string;
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
