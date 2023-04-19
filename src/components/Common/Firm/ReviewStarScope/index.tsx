import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import * as T from "./star.style";

interface Props {
  setActive?: () => void;
  //onClick?:
}

export default function StarScope(/*{ onClick }: Props*/) {
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(0);
  console.log(clickedStarIndex);
  const fillStarOfIndex = (num: number, event?: string): string => {
    if (event === "enter" && hoveredStarIndex >= num) {
      return "#ff7f23";
    }
    if (event === "leave" && clickedStarIndex >= num) {
      return "#ff7f23";
    }
    return "#eeeeee";
  };

  return (
    <T.StarBox>
      {[1, 2, 3, 4, 5].map((num) => (
        <T.StarIndexList
          key={num}
          onMouseEnter={() => setHoveredStarIndex(num)}
          onMouseLeave={() => setHoveredStarIndex(0)}
          onClick={() => {
            setClickedStarIndex(num);
            //onClick?.();
          }}
        >
          <AiFillStar
            key={num}
            fill={fillStarOfIndex(
              num,
              hoveredStarIndex === 0 ? "leave" : "enter"
            )}
            className="StarIcon"
          />
        </T.StarIndexList>
      ))}
    </T.StarBox>
  );
}
