import styled from "styled-components";

export const AllSkeletonBox = styled.div`
  width: 282px;
  height: 320px;

  @media screen and (max-width: 985px) {
    flex-basis: 31.5%;
  }
  @media screen and (max-width: 645px) {
    flex-basis: 48%;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 47.6%;
  }
`;
