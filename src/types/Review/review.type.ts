export interface ReviewInfiniteScrollListType {
  data: ReviewListType[];
  nextPage: number;
}

export interface ReviewInfoIdInfiniteScrollListType {
  data: ReviewInfoIdType[];
  nextPage: number;
}

export interface ReviewType {
  position: string;
  schoolLife: string;
  preparationCourse: string;
  employmentProcess: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  advantages: string;
  disAdvantages: string;

  total: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}

export interface ReviewListType extends ReviewType {
  storyId: string;
  totalGrade: number;
  storyCreatedAt: string;
  storyModifiedAt: string;
  companyId: string;
  companyName: string;
  companyImgUrl: string;
}

export interface ReviewInfoIdType extends ReviewType {
  storyId: string;
  total: number;
  storyCreatedAt: string;
  storyModifiedAt: string;
  writerId: string;
  memberNickName: string;
  memberSocialLoginId: string;
  memberImageUrl: string;

  //reivew를 삭제할 때 필요한 companyId를 옵셔널로 지정함
  companyId?: string;
}

export interface ReviewPostResponse {
  companyId: string;
  position: string;
  schoolLife: string;
  preparationCourse: string;
  employmentProcess: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  advantages: string;
  disAdvantages: string;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
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
  position: string;
  schoolLife: string;
  preparationCourse: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  advantages: string;
  disAdvantages: string;
  employmentProcess: string;
}
