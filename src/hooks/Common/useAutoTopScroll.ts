import { useEffect } from "react";

export const useAuthTopScroll = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
};
