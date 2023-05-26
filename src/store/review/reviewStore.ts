import { atom } from "recoil";

export const reviewPosition = atom<string>({
  key: "reviewPosition",
  default: "",
});

export const reviewCareerPath = atom<string>({
  key: "reviewCareerPath",
  default: "",
});

export const reviewEtc = atom<string>({
  key: "reviewEtc",
  default: "",
});

export const reviewGrade1 = atom<number>({
  key: "reviewGrade1",
  default: 0,
});
export const reviewGrade2 = atom<number>({
  key: "reviewGrade2",
  default: 0,
});
export const reviewGrade3 = atom<number>({
  key: "reviewGrade3",
  default: 0,
});
