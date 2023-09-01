import { HomeItemsContainer } from "@src/components/Home/HomeList/HomeItems/style";
import { SkeletonBox } from "../Common/style";
import * as S from "./style";

export default function HomeSkeleton() {
  return (
    <HomeItemsContainer>
      {Array.from({ length: 20 }).map((item, idx) => (
        <S.HomeSkeletonContainer key={idx}>
          <SkeletonBox width="100%" height="254px" />
          <SkeletonBox width="200px" height="18px" />
          <div>
            <SkeletonBox width="220px" height="18px" />
            <SkeletonBox
              width="235px"
              height="17px"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div style={{ display: "flex", columnGap: "10px" }}>
            <SkeletonBox width="50px" height="18px" />
            <SkeletonBox width="100px" height="18px" />
            <SkeletonBox width="80px" height="18px" />
          </div>
        </S.HomeSkeletonContainer>
      ))}
    </HomeItemsContainer>
  );
}