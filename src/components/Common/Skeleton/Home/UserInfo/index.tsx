import { SkeletonBox } from "../../Common/style";
import * as S from "../../User/style";

const UserInfoSkeleton = () => {
  return (
    <S.UserInfoSkeletonContainer>
      <SkeletonBox width="270px" height="75px" />
      <div>
        <SkeletonBox width="187px" height="20px" />
        <SkeletonBox width="270px" height="57px" />
      </div>
    </S.UserInfoSkeletonContainer>
  );
};

export default UserInfoSkeleton;
