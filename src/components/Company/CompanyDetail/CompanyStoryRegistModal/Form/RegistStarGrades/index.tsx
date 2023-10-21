import { STORY_STARGRAGE_ITEMS } from "@src/constants/Story/story.constant";
import { StarRatingItem } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";

interface Props {
  storyStarGrade: Record<string, number>;
  handleStarGradeChange: (name: string, grade: number) => void;
}

export default function RegistStarGrades({
  storyStarGrade,
  handleStarGradeChange,
}: Props) {
  return (
    <S.StarGradeUl>
      {STORY_STARGRAGE_ITEMS.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <S.ItemContainer>
            {Array.from({ length: 5 }).map((_, idx) => (
              <StarRatingItem
                key={idx}
                width={20}
                height={20}
                onClick={() => handleStarGradeChange(item.name, idx + 1)}
                cursor="pointer"
                color={idx < storyStarGrade[item.name] ? "#FAD85F" : "#d9d9d9"}
              />
            ))}
          </S.ItemContainer>
        </li>
      ))}
    </S.StarGradeUl>
  );
}
