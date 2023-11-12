import { atom } from "recoil";

export const HideHeader = atom<boolean>({
  key: "hideHeader",
  default: false,
});

export const MyInfoModal = atom<boolean>({
  key: "myInfoModal",
  default: false,
});

export const SearchModalAtom = atom<boolean>({
  key: "searchModalAtom",
  default: false,
});
