import ReactDom from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function Portal({ children }: Props) {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, el);
}
