import { CompanyType } from "./company.type";
import { ReviewResType } from "./review.type";

export interface NickNameType {
    nickName: string;
}

export interface MyMemberType {
    member : CompanyType;
    companyList : CompanyType[];
    reviewRist : ReviewResType[];
}