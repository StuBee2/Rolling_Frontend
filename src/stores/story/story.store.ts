import { atom } from "recoil";

export const StoryRegistModalAtom = atom<boolean>({
  key: "StoryRegisterModalAtom",
  default: false,
});

export const StoryisEditElementShowPageAtom = atom<string>({
  key: "StoryisShowEditElementAtom",
  default: "",
});
