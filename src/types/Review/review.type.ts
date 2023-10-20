export interface ReviewInfiniteScrollListType {
  data: ReviewListType[];
  nextPage: number;
}

export interface ReviewInfoIdInfiniteScrollListType {
  data: ReviewInfoIdType[];
  nextPage: number;
}

export interface StoryItemType {
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
}

export interface StoryCommonType extends StoryItemType {
  storyId: string;
  position: string;
  storyCreatedAt: string;
  storyModifiedAt: string;

  total: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;

  //reivew를 삭제할 때 필요한 companyId를 옵셔널로 지정함
  companyId?: string;
}

export interface ReviewListType extends StoryCommonType {
  companyName: string;
  companyImgUrl: string;
}

export interface ReviewInfoIdType extends StoryCommonType {
  writerId: string;
  memberNickName: string;
  memberSocialLoginId: string;
  memberImageUrl: string;
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
