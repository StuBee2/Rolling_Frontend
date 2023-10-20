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

export interface StoryCommonItemType extends StoryItemType {
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

export interface ReviewListType extends StoryCommonItemType {
  companyName: string;
  companyImgUrl: string;
}

export interface ReviewInfoIdType extends StoryCommonItemType {
  writerId: string;
  memberNickName: string;
  memberSocialLoginId: string;
  memberImageUrl: string;
}

/** story/my와 story 무한스크롤 리스폰 타입을 합친 interface
 * why? => 회사 단일 스토리 컴포넌트와 마이 페이지 스토리 컴포넌트를 같이 공유하기 때문에
 */
export interface StoryCommonType extends StoryCommonItemType {
  // story/my
  companyName?: string;
  companyImgUrl?: string;

  // 페이징 story api
  writerId?: string;
  memberNickName?: string;
  memberSocialLoginId?: string;
  memberImageUrl?: string;
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

interface Test {
  storyId: "string";
  position: "string";
  schoolLife: "string";
  preparationCourse: "string";
  employmentProcess: "string";
  interviewQuestion: "string";
  mostImportantThing: "string";
  welfare: "string";
  commuteTime: "string";
  meal: "string";
  advantages: "string";
  disAdvantages: "string";
  total: 0;
  salaryAndBenefits: 0;
  workLifeBalance: 0;
  organizationalCulture: 0;
  careerAdvancement: 0;
  storyCreatedAt: "2023-10-20T12:58:09.531Z";
  storyModifiedAt: "2023-10-20T12:58:09.531Z";
  companyId: "string";
  companyName: "string";
  companyImgUrl: "string";
}
