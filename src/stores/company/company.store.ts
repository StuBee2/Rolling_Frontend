import { atom } from "recoil";

export const CompanyAllAndSearchAtom = atom<string>({
  key: "companyAllAndSearchAtom",
  default: "list/all?",
});

export const CompanyReviewRegisterModalAtom = atom<boolean>({
  key: "companyReviewRegisterModalAtom",
  default: false,
});
