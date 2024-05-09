import { Flex } from "@src/styles/flex";
import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

export const CompanySkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 1005px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const CompanySkeletonStarGrade = styled.div`
  width: 250px;
  height: 100%;

  ${Flex({ flexDirection: "column", rowGap: "2rem", alignItems: "center" })}

  @media screen and (max-width: 1005px) {
    width: 100%;
    height: 200px;
    flex-direction: row;
    row-gap: 0;
    column-gap: 3rem;
  }
`;

export const CompanyStarGradeSkeleton = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  ${skeletonAnimation};
  @media screen and (max-width: 1005px) {
    height: 160px;
  }
`;

export const CompanySkeletonContent = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  ${Flex({ flexDirection: "column", rowGap: "3rem" })}
  padding-left: 5rem;
  @media screen and (max-width: 1005px) {
    width: 100%;
    padding-left: 0;
  }
`;
