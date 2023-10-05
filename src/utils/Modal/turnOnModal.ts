import { Dispatch, SetStateAction } from "react";

export const turnOnModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  setState(true);
  document.body.style.overflow = "hidden";
};
