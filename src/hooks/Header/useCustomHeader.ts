import { CustomResponsiveHeaderAtom } from "@src/stores/common/common.store";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { CSSObject } from "styled-components";

export const useCustomHeader = (customHeader: CSSObject) => {
  const setCustomResponsiveHeader = useSetRecoilState<CSSObject | null>(
    CustomResponsiveHeaderAtom
  );
  useEffect(() => {
    setCustomResponsiveHeader(customHeader);
    return () => setCustomResponsiveHeader(null);
  }, [setCustomResponsiveHeader, customHeader]);
};
