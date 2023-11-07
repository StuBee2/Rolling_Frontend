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
      etc: string;
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
}

export interface CompanyInfoType extends CompanyStarGrade {
  companyId: string;
  companyName: string;
  companyAddress: string;
  companyAddressEtc: string;
  companyDescription: string;
  companyLogoUrl: string;
  companyLogoRGB: number;
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
  companyLogoRgb: number;
  companyName: string;
}

export interface CompanyRegistErrorType {
  name: boolean;
  address: boolean;
  description: boolean;
}

export interface CompanyInputRefType {
  name: React.RefObject<HTMLInputElement>;
  address: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLInputElement>;
}
