import { STORY_STARGRAGE_ITEMS } from "@src/constants/Story/story.constant";
import { StarRatingItem } from "@stubee2/stubee2-rolling-ui";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  storyStarGrade: Record<string, number>;
  handleStarGradeChange: (name: string, grade: number) => void;
}

export default function RegistStarGrade({
  storyStarGrade,
  handleStarGradeChange,
}: Props) {
  // 별점을 클릭했는지 안했는지 판단하는 state
  const [isClick, setIsClick] = useState(false);
  const [prevStarGrades, setPrevStarGrades] = useState<Record<string, number>>(
    {}
  );

  return (
    <StarGradeUl>
      {STORY_STARGRAGE_ITEMS.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <ItemContainer>
            {Array.from({ length: 5 }).map((_, idx) => (
              <StarRatingItem
                key={idx}
                width={23}
                height={23}
                onMouseEnter={() => {
                  setIsClick(false);
                  handleStarGradeChange(item.name, idx + 1);
                }}
                onMouseLeave={() => {
                  !isClick &&
                    handleStarGradeChange(
                      item.name,
                      prevStarGrades[item.name] || 0
                    );
                }}
                onClick={() => {
                  setIsClick(true);
                  setPrevStarGrades((prev) => ({
                    ...prev,
                    [item.name]: idx + 1,
                  }));
                  handleStarGradeChange(item.name, idx + 1);
                }}
                cursor="pointer"
                color={idx < storyStarGrade[item.name] ? "#FAD85F" : "#d9d9d9"}
              />
            ))}
          </ItemContainer>
        </li>
      ))}
    </StarGradeUl>
  );
}

const StarGradeUl = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  background-color: rgba(247, 249, 250, 1);
  border: 1px solid #bdc2d0;
  border-radius: 5px;
  padding: 0 2rem 0 2rem;

  li {
    color: rgba(115, 123, 152, 1);
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    p {
      text-align: center;
      font-size: 17px;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
`;
