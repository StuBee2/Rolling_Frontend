import {
  CompanyModifyType,
  CompanyRegistInfo,
} from "@src/types/Company/company.type";
import { atom } from "recoil";

export const SearchCompanyAtom = atom<string>({
  key: "searchCompanyAtom",
  default: "",
});

export const CompanyIdAtom = atom<string>({
  key: "companyIdAtom",
  default: "",
});

export const CompanyModifyAtom = atom<CompanyModifyType>({
  key: "companyModifyAtom",
  default: {
    name: "",
    address: "",
    description: "",
    imgUrl: "",
    rgb: null,
  },
});

export const CompanyRegistAtom = atom<CompanyRegistInfo>({
  key: "companyRegistAtom",
  default: {
    name: "",
    address: "",
    description: "",
  },
});
