import {
  RankItemContainer,
  RankItemWrapper,
} from "@src/components/Home/CmsRank/Rank/RankItem/style";
import { SkeletonBox } from "../Common/style";

export default function RankSkeleton() {
  return (
    <RankItemContainer>
      <RankItemWrapper>
        <SkeletonBox width="100%" height="17px" />
        {Array.from({ length: 10 }).map((item, idx) => (
          <SkeletonBox key={idx} width="100%" height="80px" />
        ))}
      </RankItemWrapper>
    </RankItemContainer>
  );
}
