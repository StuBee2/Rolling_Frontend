import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const GuideText = styled.p`
  font-size: 15px;
  color: ${RollingPalette.main.Base};

  ${Flex({ alignItems: "center" })}
  padding-left: 10px;

  width: 100%;
  height: 40px;
  background-color: ${RollingPalette.unEmphasize.Light};

  ${FadeInAnimation};
`;
