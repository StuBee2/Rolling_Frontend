import { atom } from "recoil";

export const companyNameAtom = atom<string>({
  key: "companyNameAtom",
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
