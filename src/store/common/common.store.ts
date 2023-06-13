import { atom } from "recoil";

export const HideHeader = atom<boolean>({
  key: "hideHeader",
  default: false,
});