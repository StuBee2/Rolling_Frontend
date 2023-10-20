import { Container } from "@src/components/Company/CompanyDetail/CompanyDetailItem/CompanyDetailInfo/Review/style";
import { SkeletonBox } from "../../Common/style";

export default function ReviewSkeleton() {
  return (
    <Container>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <SkeletonBox width="150px" height="50px" />
        <SkeletonBox width="50px" height="50px" />
      </div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <SkeletonBox key={idx} width="100%" height="300px" />
      ))}
    </Container>
  );
}
