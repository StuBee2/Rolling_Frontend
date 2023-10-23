export interface CompanyInfiniteScrollType {
  data: CompanyListType[];
  nextPage: number;
}

export interface CompanyListType {
  companyId: {
    id: string;
  };
  companyDetails: {
    registrantId: {
      id: number;
    };
    name: string;
    description: string;
    companyAddress: {
      address: string;
    };
    companyLogo: {
      url: string;
      rgb: number;
    };
    companyStatus: "ACCEPTED" | "PENDING";
    createdAt: string;
    modifiedAt: string;
  };
  companyGrades: CompanyStarGrade;
  registrantId: {
    id: string;
  };
}

export interface CompanyInfoType extends CompanyStarGrade {
  companyId: string;
  companyName: string;
  companyAddress: string;
  companyDescription: string;
  companyLogoUrl: string;
  companyLogoRGB: string;
  companyCreatedAt: string;
  companyModifiedAt: string;
  registrantId: string;
  memberNickName: string;
  memberSocialLoginId: string;
  memberImageUrl: string;
}

export interface CompanyInfoId {
  id: string;
}

export interface CompanyStarGrade extends CompanyStarGradeWithoutTotalGrade {
  total: number;
}

export interface CompanyStarGradeWithoutTotalGrade {
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}

export interface CompanyStarGradeInfo extends CompanyStarGrade {
  companyImgUrl: string;
  companyName: string;
}

export interface CompanyRegistInfo {
  name: string;
  address: string;
  description: string;
}
