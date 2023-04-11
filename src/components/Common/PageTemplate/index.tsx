import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyles";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
