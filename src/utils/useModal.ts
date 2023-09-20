import { reviewModalOpenAtom } from "@src/stores/review/review.store";
import { useRecoilState } from "recoil";

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
