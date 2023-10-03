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
        <S.StarWrapper key={item.id}>
          <S.StarItemTitle>
            <p>{item.title}</p>
            <S.StarGradeText>· {item.star}점</S.StarGradeText>
          </S.StarItemTitle>

          <S.StarRatingContainer>
            <StarRating starRatingCount={item.star} {...attr} />
          </S.StarRatingContainer>
        </S.StarWrapper>
      ))}
    </S.StarContainer>
  );
}
