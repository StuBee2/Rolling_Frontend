import { ReviewResType } from "./review.type";

export interface CompanyType {
  id: string;
  name: string;
  address: string;
  description: string;
  imgUrl: string;
  registrantId: string;
  createdAt: string;
  modifiedAt: string;
}

export interface Res {
  company: CompanyType;
  reviewList: ReviewResType[];
}

export interface CompanyListType {
  companyList: CompanyType[];
}
