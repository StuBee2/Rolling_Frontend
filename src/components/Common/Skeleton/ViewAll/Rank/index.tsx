import {
  Container,
  Wrapper,
  Content,
} from "@src/components/ViewAll/Rank/RankList/style";
import { CompanyContent } from "@src/components/ViewAll/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";

const RankSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Container key={idx}>
          <SkeletonBox width="100px" height="20px" />
          <Wrapper>
            <Content>
              {Array.from({ length: 10 }).map((_, idx) => (
                <S.RankSkeletonBox key={idx}>
                  <SkeletonBox width="100%" height="60%" />

                  <CompanyContent>
                    <SkeletonBox width="100px" height="18px" />
                    <SkeletonBox width="100%" height="18px" />
                    <SkeletonBox width="100px" height="18px" />
                  </CompanyContent>
                </S.RankSkeletonBox>
              ))}
            </Content>
          </Wrapper>
        </Container>
      ))}
    </>
  );
};

export default RankSkeleton;
