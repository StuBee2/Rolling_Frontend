import { atom } from "recoil";

export const ShowHeader = atom<boolean>({
  key: "showHeader",
  default: true,
});