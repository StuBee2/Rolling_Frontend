import { atom } from "recoil";
import { StoryModifiableContentType } from "@src/types/Story/story.type";
import { StoryModifiableInfoType } from "@src/types/Story/story.type";

export const StoryRegistModalAtom = atom<boolean>({
  key: "StoryRegisterModalAtom",
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

export const StoryModifiableInfoAtom = atom<StoryModifiableInfoType>({
  key: "StoryEditionContentAtom",
  default: {
    position: "",
    commuteTime: "",
    meal: "",
  },
});

export const StoryModifiableContentAtom = atom<StoryModifiableContentType>({
  key: "StoryEditionContentAtom",
  default: {
    schoolLife: "",
    preparationCourse: "",
    employmentProcess: "",
    interviewQuestion: "",
    mostImportantThing: "",
    welfare: "",
  },
});
