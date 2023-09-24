import { StarGradeProps } from "@src/types/StarGrade/starGrade.type";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";

export default function Star({
  rankStatus,
  fontSize,
  ...attr
}: StarGradeProps) {
  return (
    <S.StarContainer fontSize={fontSize}>
      {rankStatus.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>
            <StarRating starRatingCount={item.star} {...attr} />
          </p>
        </div>
      ))}
    </S.StarContainer>
  );
}
