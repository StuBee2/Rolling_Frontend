import { Column } from "@src/styles/flex";
import { SkeletonBox } from "../../Common/style";

const UserInfoSkeleton = () => {
  return (
    <Column $rowGap={"40px"}>
      <SkeletonBox width="270px" height="75px" />
      <Column $rowGap={"10px"}>
        <SkeletonBox width="187px" height="20px" />
        <SkeletonBox width="270px" height="57px" />
      </Column>
    </Column>
  );
};

export default UserInfoSkeleton;
