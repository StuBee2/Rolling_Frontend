import { RecommandItemContainer } from "@src/components/Home/Recommand/RecommandItem/style";
import { SkeletonBox } from "../../Common/style";
import { Row } from "@src/styles/flex";

const RecommandSkeleton = () => {
  return (
    <RecommandItemContainer>
      <Row
        $alignItems={"center"}
        $columnGap={"1rem"}
        $justifyContent={"center"}
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <SkeletonBox key={idx} width="280px" height="180px" />
        ))}
      </Row>
    </RecommandItemContainer>
  );
};

export default RecommandSkeleton;
