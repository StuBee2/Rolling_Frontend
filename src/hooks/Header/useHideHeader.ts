import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideHeader } from "@src/stores/common/common.store";

const useHideHeader = () => {
  const setHideHeader = useSetRecoilState(HideHeader);
  useEffect(() => {
    setHideHeader(true);
    return () => setHideHeader(false);
  }, [setHideHeader]);
};

export default useHideHeader;
