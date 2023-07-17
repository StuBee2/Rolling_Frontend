import { atom } from "recoil";

export const balanceGradeAtom = atom<number>({
  key: "balanceGrade",
  default: 0,
});

export const salaryGradeAtom = atom<number>({
  key: "salaryGrade",
  default: 0,
});

export const welfareGradeAtom = atom<number>({
  key: "welfareGrade",
  default: 0,
});

export const companyIdAtom = atom<string | undefined>({
  key: "companyIdAtom",
  default: "",
});
