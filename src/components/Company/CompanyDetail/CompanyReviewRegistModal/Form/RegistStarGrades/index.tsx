import { REVIEW_STARGRAGE_ITEMS } from "@src/constants/Review/review.constant";
import { StarRatingItem } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";

interface Props {
  reviewStarGrade: Record<string, number>;
  handleStarGradeChange: (name: string, grade: number) => void;
}

export default function RegistStarGrades({
  reviewStarGrade,
  handleStarGradeChange,
}: Props) {
  return (
    <S.StarGradeUl>
      {REVIEW_STARGRAGE_ITEMS.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <S.StarRatingItemContainer>
            {Array.from({ length: 5 }).map((_, idx) => (
              <StarRatingItem
                key={idx}
                width={20}
                height={20}
                onClick={() => handleStarGradeChange(item.name, idx + 1)}
                cursor="pointer"
                color={idx < reviewStarGrade[item.name] ? "#FAD85F" : "#d9d9d9"}
              />
            ))}
          </S.StarRatingItemContainer>
        </li>
      ))}
    </S.StarGradeUl>
  );
}
