import { FadeInAnimation } from "@src/styles/common.style";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const GuideText = styled.p`
  font-size: 15px;
  color: ${RollingPalette.main.Base};

  display: flex;
  align-items: center;
  padding-left: 10px;

  width: 100%;
  height: 40px;
  background-color: ${RollingPalette.unEmphasize.Light};

  ${FadeInAnimation};
`;
