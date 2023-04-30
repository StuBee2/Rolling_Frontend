import { CompanyType } from "./company.type";
import { ReviewResType } from "./review.type";

export interface MemberType {
  id: string;
  nickName: string;
  socialId: string;
  name: string;
  email: string;
  imageUrl: string;
  memberRole: string;
  loginType: string;
  createdAt: string;
  modifiedAt: string;
}

export interface MyMemberType {
  member: MemberType;
  companyList: CompanyType[];
  reviewList: ReviewResType[];
}
