import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import { HideHeader } from "../../../store/user/userStore";
interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  return (
    <>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {children}
    </>
  );
}
