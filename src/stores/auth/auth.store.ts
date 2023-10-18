import { atom } from "recoil";

export const SignInModalAtom = atom<boolean>({
  key: "signInModalAtom",
  default: false,
});
