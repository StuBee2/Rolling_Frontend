import * as T from "./star.style";
import { useStarScope } from "../../../../hooks/Firm/useStarScope";

interface Props {
  setActive?: () => void;
  //onClick?:
}

export default function StarScope(/*{ onClick }: Props*/) {
  const {
    setClickedStarIndex,
    setHoveredStarIndex,
    fillStarOfIndex,
    hoveredStarIndex,
  } = useStarScope();

  return (
    <T.StarBox>
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          onMouseEnter={() => setHoveredStarIndex(num)}
          onMouseLeave={() => setHoveredStarIndex(0)}
          onClick={() => {
            setClickedStarIndex(num);
            //onClick?.();
          }}
        >
          <T.StarIcon
            fill={fillStarOfIndex(
              num,
              hoveredStarIndex === 0 ? "leave" : "enter"
            )}
          />
        </div>
      ))}
    </T.StarBox>
  );
}
