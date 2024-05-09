import { Column } from "@src/styles/flex";
import { SkeletonBox } from "../Common/style";

const UserSkeleton = () => {
  return (
    <Column $width={"100%"} $rowGap={"3rem"}>
      {Array.from({
        length: 5,
      }).map((item, idx) => (
        <SkeletonBox width="100%" height="400px" key={idx} />
      ))}
    </Column>
  );
};

export default UserSkeleton;
