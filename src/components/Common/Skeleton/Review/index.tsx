import { CompanyDetailReviewContainer } from "@src/components/Company/CompanyDetail/CompanyDetailItem/CompanyDetailInfo/CompanyDetailReview/style";
import { SkeletonBox } from "../Common/style";

export default function ReviewSkeleton() {
  return (
    <CompanyDetailReviewContainer>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <SkeletonBox width="150px" height="50px" />
        <SkeletonBox width="50px" height="50px" />
      </div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <SkeletonBox key={idx} width="100%" height="300px" />
      ))}
    </CompanyDetailReviewContainer>
  );
}
