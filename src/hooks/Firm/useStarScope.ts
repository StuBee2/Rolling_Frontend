import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
// import { reviewGrade1 } from "../../store/review/reviewStore";

export function useStarScope() {
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(0);
  // console.log(clickedStarIndex);

  const fillStarOfIndex = useCallback(
    (num: number, event?: string): string => {
      if (event === "enter" && hoveredStarIndex >= num) {
        return "#ff7f23";
      }
      if (event === "leave" && clickedStarIndex >= num) {
        return "#ff7f23";
      }
      return "#eeeeee";
    },
    [clickedStarIndex, hoveredStarIndex]
  );

  return {
    setHoveredStarIndex,
    setClickedStarIndex,
    fillStarOfIndex,
    hoveredStarIndex,
  };
}
