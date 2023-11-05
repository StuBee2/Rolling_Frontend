export interface StoryInfiniteScrollListType {
  data: StoryListType[];
  nextPage: number;
}

export interface StoryInfoIdInfiniteScrollListType {
  data: StoryInfoIdType[];
  nextPage: number;
}

export interface StoryItemType {
  storyId: string;
  schoolLife: string;
  preparationCourse: string;
  employmentProcess: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  pros: string;
  cons: string;
  etc: string;
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

export interface StoryListType extends StoryCommonItemType {
  companyName: string;
  companyImgUrl: string;
}

export interface StoryInfoIdType extends StoryCommonItemType {
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

export interface StoryPostResponse {
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
  pros: string;
  cons: string;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}

export interface StoryMyStatusResponse {
  count: number;
  lastModifiedDate: string;
}

export interface StoryCompanyInfoType {
  companyName: string;
  companyLogo: string;
  companyId: string;
}

export interface StoryCompanyContentsType {
  position: string;
  schoolLife: string;
  preparationCourse: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  pros: string;
  cons: string;
  employmentProcess: string;
}

export interface StoryRegistErrorType {
  position: boolean;
  schoolLife: boolean;
  preparationCourse: boolean;
  interviewQuestion: boolean;
  mostImportantThing: boolean;
  employmentProcess: boolean;
}

export interface StoryInputRefType {
  position: React.RefObject<HTMLInputElement>;
  schoolLife: React.RefObject<HTMLInputElement>;
  preparationCourse: React.RefObject<HTMLInputElement>;
  mostImportantThing: React.RefObject<HTMLInputElement>;
  employmentProcess: React.RefObject<HTMLInputElement>;
  interviewQuestion: React.RefObject<HTMLInputElement>;
}

export interface StoryRegistRequireType {
  position: string;
  welfare: string;
  pros: string;
  cons: string;
}

export interface StoryModifiableInfoType {
  position: string;
  commuteTime: string;
  meal: string;
}

export interface StoryModifiableContentPatchType {
  position: string;
  schoolLife: string;
  preparationCourse: string;
  employmentProcess: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  pros: string;
  cons: string;
  etc: string;
}
