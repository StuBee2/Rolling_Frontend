import {
  RecommandItemContainer,
  RecommandItemWrapper,
} from "@src/components/Home/Recommand/RecommandItem/style";
import { SkeletonBox } from "../../Common/style";

export default function RecommandSkeleton() {
  return (
    <RecommandItemContainer>
      <RecommandItemWrapper>
        {Array.from({ length: 10 }).map((_, idx) => (
          <SkeletonBox key={idx} width="280px" height="180px" />
        ))}
      </RecommandItemWrapper>
    </RecommandItemContainer>
  );
}
