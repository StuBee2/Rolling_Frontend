import styled from "styled-components";
import { SkeletonAnimation } from "../../Common/style";

export const MainItemSkeletonBox = styled.div`
  width: 330px;
  height: 300px;
  border: 1px solid #ddd;

  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1105px) {
    flex-basis: 47%;
    height: 330px;
  }
  @media screen and (max-width: 710px) {
    flex-basis: auto;
    width: 98%;
    height: 450px;
  }

  ${SkeletonAnimation};
`;
