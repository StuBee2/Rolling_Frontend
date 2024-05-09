import { Wrapper } from "@src/components/ViewAll/All/AllList/style";
import { CompanyContent } from "@src/components/ViewAll/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";
import { Column } from "@src/styles/flex";

const AllListSkeleton = () => {
  return (
    <Column $rowGap={"20px"}>
      <Wrapper>
        {Array.from({ length: 20 }).map((_, idx) => (
          <S.AllSkeletonBox key={idx}>
            <SkeletonBox width="100%" height="60%" />

            <CompanyContent>
              <SkeletonBox width="100px" height="18px" />
              <SkeletonBox width="100%" height="18px" />
              <SkeletonBox width="100px" height="18px" />
            </CompanyContent>
          </S.AllSkeletonBox>
        ))}
      </Wrapper>
    </Column>
  );
};

export default AllListSkeleton;
