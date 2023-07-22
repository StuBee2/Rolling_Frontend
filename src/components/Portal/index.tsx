import ReactDom from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

export const Portal = ({ children, selector }: PortalProps) => {
  if (!children) {
    throw new Error("children은 필수 입니다");
  }

  const selectedDOM = document.querySelector(selector);
  return !!selectedDOM ? ReactDom.createPortal(children, selectedDOM) : null;
};
