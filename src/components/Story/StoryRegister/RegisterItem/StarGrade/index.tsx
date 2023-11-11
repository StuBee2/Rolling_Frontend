import { STORY_STARGRAGE_ITEMS } from "@src/constants/Story/story.constant";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import { StarRatingItem } from "@stubee2/stubee2-rolling-ui";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  storyStarGrade: Record<string, number>;
  // 스토리 수정에 필요하기 때문에 prevStarGrade 옵셔널 지정하여 값 받기
  prevStarGarade?: Record<string, number>;
  handleStarGradeChange: (name: string, grade: number) => void;
}

export default function RegistStarGrade({
  storyStarGrade,
  prevStarGarade,
  handleStarGradeChange,
}: Props) {
  // 별점을 클릭했는지 안했는지 판단하는 state
  const [isClick, setIsClick] = useState(false);
  const [prevStarGrades, setPrevStarGrades] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    if (prevStarGarade) {
      setPrevStarGrades(prevStarGarade);
    }
  }, [prevStarGarade]);

  return (
    <StarGradeContainer>
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
    </StarGradeContainer>
  );
}

const StarGradeContainer = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  overflow: auto;

  background-color: ${RollingPalette.unEmphasize.Lightest};
  border: 1px solid ${RollingPalette.unEmphasize.Base};
  border-radius: 5px;
  padding: 0 3rem 0 3rem;

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
