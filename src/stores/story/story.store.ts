import { atom } from "recoil";
import { StoryModifiableContentPatchType } from "@src/types/Story/story.type";

import { recoilPersist } from "recoil-persist";
import { CompanyParam } from "@src/services/Company/api";

const { persistAtom } = recoilPersist();

// 스토리 등록페이지 경로유입이 헤더로 들어온 건지 회사단일 조회 페이지에서
// 들어온 건지 판단하는 atom
export const StoryPagePathInflow = atom<"header" | "detail">({
  key: "storyPagePathInflowAtom",
  default: "header",
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});

/** 스토리 등록페이지에서 기업등록해서 서버가 주는 id값을 담은 다음,
 * 스토리 남기기를 위해서 해당회사 id로 스토리를 등록할 때 필요한 atom
 */
export const StoryCompanyIdAtom = atom<string>({
  key: "storyCompanyId",
  default: "",
  effects_UNSTABLE: [persistAtom],
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

export const StorySetupInitializationDotAtom = atom<boolean>({
  key: "StorySetupInitializationDotAtom",
  default: false,
});

export const StoryModifiableEventAtom = atom<boolean>({
  key: "StoryModifiableEventAtom",
  default: false,
});

export const StoryModifiableIdAtom = atom<string>({
  key: "StoryEditionIdAtom",
  default: "",
});

export const StoryModifiableContentAtom = atom<StoryModifiableContentPatchType>(
  {
    key: "StoryEditionContentAtom",
    default: {
      position: "",
      schoolLife: "",
      preparationCourse: "",
      employmentProcess: "",
      interviewQuestion: "",
      mostImportantThing: "",
      welfare: "",
      commuteTime: "",
      meal: "",
      pros: "",
      cons: "",
      etc: "",
    },
  }
);
