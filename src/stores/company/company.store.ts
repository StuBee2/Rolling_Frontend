import {
  CompanyModifyType,
  CompanyRegistInfo,
} from "@src/types/Company/company.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const SearchCompanyAtom = atom<string>({
  key: "searchCompanyAtom",
  default: "",
});

export const CompanyIdAtom = atom<string>({
  key: "companyIdAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});

export const CompanyRegistAtom = atom<CompanyRegistInfo>({
  key: "companyRegistAtom",
  default: {
    name: "",
    address: "",
    description: "",
  },
});
