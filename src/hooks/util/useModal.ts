import { useRecoilState } from "recoil";
import { reviewModalOpenAtom } from "../../store/review/reviewmodalStore";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(reviewModalOpenAtom);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};

export default useModal;
