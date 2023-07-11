import { Portal } from "../../Portal";
import { CommonComponentProps } from "../common.type";
// import { ModalProps } from "./modal.type";

interface ModalProps extends CommonComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, customStyle, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#modal">
          <div onClick={onClose} style={customStyle}>
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
