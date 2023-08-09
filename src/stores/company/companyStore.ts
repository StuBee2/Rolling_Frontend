import { atom } from "recoil";

export const companyLogoAtom = atom<string>({
  key: "companyLogoAtom",
  default: "",
});
