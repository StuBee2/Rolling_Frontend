import { Container, Wrapper } from "@src/components/ViewAll/All/AllList/style";
import { CompanyContent } from "@src/components/ViewAll/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";

const AllListSkeleton = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default AllListSkeleton;
