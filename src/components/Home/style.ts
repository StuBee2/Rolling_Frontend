import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import { Flex } from "@src/styles/flex";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;

  zoom: 0.8;

  ${Flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "10rem",
  })}

  background-color: #f9fafb;
  white-space: nowrap;
  min-width: 500px;
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;

  ${Flex({ flexDirection: "column", rowGap: "8rem" })}

  @media screen and (max-width: 1165px) {
    width: 90%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ViewAll = styled.p`
  cursor: pointer;
  padding: 10px;

  margin-top: 3px;
  font-weight: bold;
  color: ${RollingPalette.unEmphasize.Dark};

  ${HoverAnimation};
`;
