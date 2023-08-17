import { atom } from "recoil";

export const companyNameAtom = atom<string>({
  key: "companyNameAtom",
  default: "",
});

export const companyLogoAtom = atom<string>({
  key: "companyLogoAtom",
  default: "",
});

export const companyAddressAtom = atom<string>({
  key: "companyAddressAtom",
  default: "",
});

export const companyInfoAtom = atom<string>({
  key: "companyInfoAtom",
  default: "",
});

export const CompanyAllAndSearchAtom = atom<string>({
  key: "companyAllAndSearchAtom",
  default: "list/all?",
});
