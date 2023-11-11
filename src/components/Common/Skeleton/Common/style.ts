import styled from "styled-components";
import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";

export const SkeletonBox = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 5px;
  ${skeletonAnimation}
`;
