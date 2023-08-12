import { Container } from "@src/components/User/Profile/style";
import { SkeletonBox } from "../Common/style";
import * as S from "./style";

export default function UserSkeleton() {
  return (
    <Container>
      <SkeletonBox width="250px" height="30px" />
      <SkeletonBox width="270px" height="22px" />
      <S.UserSkeletonStatus />
      {Array.from({
        length: 15,
      }).map((item, idx) => (
        <SkeletonBox width="100%" height="250px" key={idx} />
      ))}
    </Container>
  );
}
