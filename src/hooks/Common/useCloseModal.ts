import { Dispatch, SetStateAction, useEffect, KeyboardEvent } from "react";

export const useCloseModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  const handleKeyDown = (e: KeyboardEvent<Element>) => {
    if (e.key === "Escape") {
      setState(false);
    }
  };

  useEffect(() => {
    const eventListener: EventListener = (e: Event) =>
      handleKeyDown(e as unknown as KeyboardEvent<Element>);
    window.addEventListener("keydown", eventListener);
    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, []);
};
