import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideHeader } from "../../store/user/userStore";

const useHideHeader = () => {
  const setHideHeader = useSetRecoilState(HideHeader);
  useEffect(() => {
    setHideHeader(true);
    return () => setHideHeader(false);
  }, [setHideHeader]);
  return {};
};

export default useHideHeader;
