import { ReactNode } from "react";
import GlobalStyle from "@src/styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import {
  HideHeader,
  IsCloseModalAtom,
  MyInfoModal,
} from "@src/stores/common/common.store";
import Search from "../../Modal/Search";
import Info from "../../Modal/Info";
import { useAuthTopScroll } from "@src/hooks/Common/useAutoTopScroll";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const isCloseModal = useRecoilValue(IsCloseModalAtom);
  const myInfoModal = useRecoilValue(MyInfoModal);
  useAuthTopScroll();

  return (
    <>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {isCloseModal && <Search />}
      {myInfoModal && <Info />}
      {children}
    </>
  );
}
