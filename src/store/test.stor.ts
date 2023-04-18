import { atom } from "recoil";

export const Rating = atom<number>({
  key: "Rating",
  default: 1,
});
