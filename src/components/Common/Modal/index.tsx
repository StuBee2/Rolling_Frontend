import { Portal } from "../../Portal";
import { ModalProps } from "./modal.type";

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
