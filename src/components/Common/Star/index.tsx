import { StarGradeProps } from "@src/types/StarGrade/starGrade.type";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import * as S from "./style";
import { Column, Row } from "@src/styles/flex";

const Star = ({ rankStatus, fontSize, ...attr }: StarGradeProps) => {
  return (
    <S.StarContainer fontSize={fontSize}>
      {rankStatus.map((item) => (
        <Column $rowGap={"1rem"} key={item.id}>
          <Row $columnGap={"5px"} $justifyContent={"center"}>
            <p>{item.title}</p>
            <S.StarGradeText>· {item.star}점</S.StarGradeText>
          </Row>

          <S.StarRatingContainer>
            <StarRating starRatingCount={item.star} {...attr} />
          </S.StarRatingContainer>
        </Column>
      ))}
    </S.StarContainer>
  );
};

export default Star;
