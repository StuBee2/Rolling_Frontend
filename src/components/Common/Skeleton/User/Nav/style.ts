import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

export const NavProfileLogoSkeleton = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  ${skeletonAnimation}
`;
