import { atom } from "recoil";
import { CSSObject } from "styled-components";

export const HideHeader = atom<boolean>({
  key: "hideHeader",
  default: false,
});

export const MyInfoModal = atom<boolean>({
  key: "myInfoModal",
  default: false,
});

export const IsCloseModalAtom = atom<boolean>({
  key: "isCloseModalAtom",
  default: false,
});

export const CustomResponseHeaderAtom = atom<CSSObject | null>({
  key: "customResponsiveHeaderAtom",
  default: null,
});
