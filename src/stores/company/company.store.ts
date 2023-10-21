import { CompanyRegistInfo } from "@src/types/Company/company.type";
import { atom } from "recoil";

export const CompanyAllAndSearchAtom = atom<string>({
  key: "companyAllAndSearchAtom",
  default: "list/all?",
});

export const SearchCompanyAtom = atom<string>({
  key: "searchCompanyAtom",
  default: "",
});

export const CompanyStoryRegistModalAtom = atom<boolean>({
  key: "companyStoryRegisterModalAtom",
  default: false,
});

export const CompanyRegistAtom = atom<CompanyRegistInfo>({
  key: "companyRegistAtom",
  default: {
    name: "",
    address: "",
    description: "",
  },
});
