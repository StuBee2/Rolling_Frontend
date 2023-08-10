import { atom } from "recoil";

export const HideHeader = atom<boolean>({
  key: "hideHeader",
  default: false,
});

export const SearchModal = atom<boolean>({
  key: "searchModal",
  default: false,
});

export const SimpleInfoModal = atom<boolean>({
  key: "SimpleInfoModal",
  default: false,
});
