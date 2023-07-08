import { atom } from "recoil";
import { MemberImgNameType } from "../../types/member.type";

export const MemberImgName = atom<MemberImgNameType>({
  key: "memberImgName",
  default: { imageUrl: "", name: "" },
});
