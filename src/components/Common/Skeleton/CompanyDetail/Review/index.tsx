import { SkeletonBox } from "../../Common/style";
import { Column } from "@src/styles/flex";

const StorySkeleton = () => {
  return (
    <Column $width={"100%"} $rowGap={"2rem"}>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <SkeletonBox width="150px" height="50px" />
        <SkeletonBox width="50px" height="50px" />
      </div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <SkeletonBox key={idx} width="100%" height="300px" />
      ))}
    </Column>
  );
};

export default StorySkeleton;
