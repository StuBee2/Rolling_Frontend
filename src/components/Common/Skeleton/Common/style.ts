import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

export const SkeletonBox = styled.div<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  ${skeletonAnimation}
`;
