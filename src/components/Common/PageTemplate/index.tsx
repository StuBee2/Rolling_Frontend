import { ReactNode } from "react";
import GlobalStyle from "@src/styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import {
  HideHeader,
  IsCloseModalAtom,
  MyInfoModal,
} from "@src/stores/common/common.store";
import Search from "../Modal/Search";
import Info from "../Modal/MyInfo";
import Portal from "../Portal";
import { SignInModalAtom } from "@src/stores/auth/auth.store";
import SignIn from "../Auth/SignIn";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const isCloseModal = useRecoilValue(IsCloseModalAtom);
  const myInfoModal = useRecoilValue(MyInfoModal);
  const signInModal = useRecoilValue(SignInModalAtom);

  return (
    <>
      <GlobalStyle />
      <Portal>
        {myInfoModal && <Info />}
        {signInModal && <SignIn />}
        {isCloseModal && <Search />}
      </Portal>
      {!hideHeader && <Header />}
      <>{children}</>
    </>
  );
}
