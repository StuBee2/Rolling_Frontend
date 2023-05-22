import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ShowHeader } from "../../store/user/userStore";

const useShowHeader = () => {
  const setShowHeader = useSetRecoilState(ShowHeader);
  useEffect(() => {
    setShowHeader(false);
    return () => setShowHeader(true);
  }, [setShowHeader]);
  return {};
};

export default useShowHeader;
