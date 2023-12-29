import { Dispatch, SetStateAction } from "react";

export const turnOnOffModal = (
  setState: Dispatch<SetStateAction<boolean>>,
  modalType: "on" | "off"
) => {
  if (modalType === "on") {
    setState(true);
    document.body.style.overflow = "hidden";
  } else {
    setState(false);
    document.body.style.overflow = "unset";
  }
};
