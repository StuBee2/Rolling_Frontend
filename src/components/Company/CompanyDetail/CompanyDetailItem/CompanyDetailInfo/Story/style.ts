import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const StoryTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;

export const StoryCount = styled.p`
  color: ${RollingPalette.main.Base};
`;
