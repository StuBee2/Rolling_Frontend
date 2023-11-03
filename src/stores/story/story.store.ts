import { CompanyParam } from "@src/repositories/Company/company.repository";
import { atom } from "recoil";

export const StoryRegistModalAtom = atom<boolean>({
  key: "StoryRegisterModalAtom",
  default: false,
});

export const StorySearchCompanyAtom = atom<{
  companyName: string;
  isExistSearchList: boolean;
}>({
  key: "storySearchCompanyAtom",
  default: {
    companyName: "",
    isExistSearchList: false,
  },
});

export const StoryCompanyRegistAtom = atom<CompanyParam>({
  key: "storyCompanyRegistAtom",
  default: {
    name: "",
    address: "",
    addressEtc: "",
    description: "",
    imgUrl: "",
    rgb: null,
  },
});

/** 스토리 등록페이지에서 기업등록해서 서버가 주는 id값을 담은 다음,
 * 스토리 남기기를 위해서 해당회사 id로 스토리를 등록할 때 필요한 atom
 */
export const StoryCompanyIdAtom = atom<string>({
  key: "storyCompanyId",
  default: "",
});
