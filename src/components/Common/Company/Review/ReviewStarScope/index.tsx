import React, { useState } from "react";
import * as T from "./star.style";

interface RatingProps {
  totalStars: number;
  initialRating?: number;
  onChangeRating?: (rating: number) => void;
}

const StarRating: React.FC<RatingProps> = ({
  totalStars,
  initialRating = 0,
  onChangeRating,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onChangeRating) {
      onChangeRating(selectedRating);
    }
  };

  return (
    <T.StarBox>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <T.StarIcon
            key={starValue}
            onClick={() => handleStarClick(starValue)}
            style={{
              cursor: "pointer",
              color: starValue <= rating ? "gold" : "#D9D9D9",
              fontSize: "30pxs",
            }}
          >
            ★
          </T.StarIcon>
        );
      })}
    </T.StarBox>
  );
};

export default StarRating;
