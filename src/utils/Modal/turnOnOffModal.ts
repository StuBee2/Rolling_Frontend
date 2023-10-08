import { Dispatch, SetStateAction } from "react";

export const turnOnModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  setState(true);
  document.body.style.overflow = "hidden";
};

export const turnOffModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  setState(false);
  document.body.style.overflow = "unset";
};
