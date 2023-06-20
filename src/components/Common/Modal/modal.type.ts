import { CommonComponentProps } from "../common.type";

export interface ModalProps extends CommonComponentProps {
  isOpen: boolean;
  onClose: () => void;
}
