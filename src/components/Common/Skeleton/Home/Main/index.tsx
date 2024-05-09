import styled from "styled-components";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";
import { Column, Flex } from "@src/styles/flex";

const MainSkeleton = () => {
  return (
    <Column $width={"100%"} $height={"100%"} $rowGap={"15px"}>
      <SkeletonBox width="200px" height="30px" />
      <Column $width={"100%"} $height={"100%"} $wrap={"wrap"}>
        <Row>
          {Array.from({ length: 9 }).map((_, idx) => (
            <S.MainItemSkeletonBox key={idx} />
          ))}
        </Row>
      </Column>
    </Column>
  );
};

export default MainSkeleton;

const Row = styled.div`
  width: 100%;
  height: 100%;
  ${Flex({ flexWrap: "wrap", gap: "1.5rem" })}
`;
