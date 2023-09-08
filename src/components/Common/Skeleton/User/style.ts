import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

export const UserSkeletonStatus = styled.div`
  width: 45%;
  height: 125px;
  border-radius: 5px;
  @media screen and (max-width: 1355px) {
    width: 80%;
  }
  ${skeletonAnimation};
`;
