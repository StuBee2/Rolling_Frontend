import { SkeletonBox } from "../Common/style";

export default function RankSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((item, idx) => (
        <SkeletonBox key={idx} width="95%" height="80px" />
      ))}
    </>
  );
}
