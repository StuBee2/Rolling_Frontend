import { CompanyParam } from "@src/services/Company/api";
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

export const CompanyModifyAtom = atom<CompanyParam>({
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
