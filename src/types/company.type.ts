export interface CompanyListType {
  id: string;
  name: string;
  address: string;
  description: string;
  imgUrl: string;
  totalGrade: number;
  balanceGrade: number;
  salaryGrade: number;
  welfareGrade: number;
  registrantId: string;
  createdAt: string;
  modifiedAt: string;
}

export interface CompanyInfoType {
  companyQueryResponse: {
    companyId: string;
    companyName: string;
    companyAddress: string;
    companyDescription: string;
    companyImgUrl: string;
    companyCreatedAt: string;
    companyModifiedAt: string;
    registrantId: string;
    memberNickName: string;
    memberSocialId: string;
    memberImageUrl: string;
  };
  reviewInfoList: [
    {
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
  ];
}
