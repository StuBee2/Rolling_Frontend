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
  companyGrades: CompanyAllStarGrade;
  registrantId: {
    id: string;
  };
}

export interface CompanyInfoType extends CompanyAllStarGrade {
  companyId: string;
  companyName: string;
  companyAddress: string;
  companyDescription: string;
  companyImgUrl: string;
  companyCreatedAt: string;
  companyModifiedAt: string;
  registrantId: string;
  memberNickName: string;
  memberSocialLoginId: string;
  memberImageUrl: string;
}

export interface CompanyInfoId {
  id: number;
}

export interface CompanyID {
  companyId: string;
}

export interface CompanyAllStarGrade extends CompanyStarGrade {
  totalGrade: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}

export interface CompanyStarGrade {
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}

export interface CompanyStarGradeInfo extends CompanyAllStarGrade {
  companyImgUrl: string;
  companyName: string;
}
