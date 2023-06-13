export interface CompanyInfiniteScrollType {
  data: CompanyListType[];
  nextPage: number;
}

export interface CompanyListType {
  companyId: {
    id: string;
  };
  companyDetails: {
    name: string;
    companyAddress: {
      address: string;
    };
    description: string;
    imgUrl: string;
    createdAt: string;
    modifiedAt: string;
  };
  companyGrades: {
    totalGrade: number;
    balanceGrade: number;
    salaryGrade: number;
    welfareGrade: number;
  };
  registrantId: {
    id: string;
  };
}

export interface CompanyInfoType {
  companyId: string;
  companyName: string;
  companyAddress: string;
  companyDescription: string;
  companyImgUrl: string;
  totalGrade: number;
  balanceGrade: number;
  salaryGrade: number;
  welfareGrade: number;
  companyCreatedAt: string;
  companyModifiedAt: string;
  registrantId: string;
  memberNickName: string;
  memberSocialId: string;
  memberImageUrl: string;
}
