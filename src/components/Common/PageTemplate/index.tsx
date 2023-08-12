import { ReactNode, useEffect } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import {
  HideHeader,
  SearchModal,
  SimpleInfoModal,
} from "../../../stores/common/common.store";
import Search from "../Modal/Search";
import Info from "../Modal/Info";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const searchModal = useRecoilValue(SearchModal);
  const simpleInfoModal = useRecoilValue(SimpleInfoModal);
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {searchModal && <Search />}
      {simpleInfoModal && <Info />}
      {children}
    </>
  );
}
