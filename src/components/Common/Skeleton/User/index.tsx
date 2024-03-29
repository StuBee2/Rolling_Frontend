import { SkeletonBox } from "../Common/style";
import * as S from "./style";

export default function UserSkeleton() {
  return (
    <S.UserSkeletonContainer>
      {Array.from({
        length: 5,
      }).map((item, idx) => (
        <SkeletonBox width="100%" height="400px" key={idx} />
      ))}
    </S.UserSkeletonContainer>
  );
}
