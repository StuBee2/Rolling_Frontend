import styled from "styled-components";

export const AllSkeletonBox = styled.div`
  width: 285px;
  height: 320px;

  @media screen and (max-width: 1215px) {
    flex-basis: 32%;
  }

  @media screen and (max-width: 1031px) {
    flex-basis: 48.7%;
    height: 350px;
  }

  @media screen and (max-width: 850px) {
    flex-basis: 48.2%;
  }

  @media screen and (max-width: 650px) {
    flex-basis: 47.7%;
    height: 290px;
  }
`;