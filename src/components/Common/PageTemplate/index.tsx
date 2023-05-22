import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";
import Header from "../Header/index";
import { useRecoilValue } from "recoil";
import { ShowHeader } from "../../../store/user/userStore";
interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const showHeader = useRecoilValue(ShowHeader);
  return (
    <>
      <GlobalStyle />
      {showHeader && <Header />}
      {children}
    </>
  );
}
