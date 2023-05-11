import { CompanyListType } from "./company.type";
import { ReviewListType } from "./review.type";

export interface MemberType {
  id: string;
  nickName: string;
  socialId: string;
  name: string;
  email: string;
  imageUrl: string;
  memberRole: "MEMBER";
  loginType: "GITHUB";
  createdAt: string;
  modifiedAt: string;
}

export interface MemberUserInfoType {
  member: MemberType;
  companyList: CompanyListType[];
  reviewList: ReviewListType[];
}
