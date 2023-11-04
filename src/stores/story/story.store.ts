import { atom } from "recoil";
import { StoryModifiableContentPatchType } from "@src/types/Story/story.type";

export const StoryRegistModalAtom = atom<boolean>({
  key: "StoryRegisterModalAtom",
  default: false,
});

export const StorySetupInitializationDotAtom = atom<boolean>({
  key: "StorySetupInitializationDotAtom",
  default: false,
});

export const StoryModifiablePageAtom = atom<boolean>({
  key: "StoryModifiablePageAtom",
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
      salaryAndBenefits: 0,
      workLifeBalance: 0,
      organizationalCulture: 0,
      careerAdvancement: 0,
    },
  }
);
