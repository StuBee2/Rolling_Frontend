import { atom } from "recoil";

export const reviewModalOpenAtom = atom<boolean>({
  key: "reviewModalOpenAtom",
  default: false,
});
