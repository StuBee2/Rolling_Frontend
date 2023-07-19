import { atom } from "recoil";

export const salaryAndBenefitsdAtom = atom<number>({
  key: "salaryAndBenefitsdAtom",
  default: 0,
});

export const workLifeBalancedAtom = atom<number>({
  key: "workLifeBalancedAtom",
  default: 0,
});

export const organizationalCulturedAtom = atom<number>({
  key: "organizationalCulturedAtom",
  default: 0,
});

export const careerAdvancementAtom = atom<number>({
  key: "careerAdvancementAtom",
  default: 0,
});

export const companyIdAtom = atom<string | undefined>({
  key: "companyIdAtom",
  default: "",
});
