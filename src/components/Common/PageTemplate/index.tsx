import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import {
  HideHeader,
  SearchModal,
  SimpleInfoModal,
} from "../../../store/common/common.store";
import Search from "../Modal/Search";
import SimpleInfo from "../Modal/SimpleInfo";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const searchModal = useRecoilValue(SearchModal);
  const simpleInfoModal = useRecoilValue(SimpleInfoModal);
  return (
    <>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {searchModal && <Search />}
      {simpleInfoModal && <SimpleInfo />}
      {children}
    </>
  );
}
