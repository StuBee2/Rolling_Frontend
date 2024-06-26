import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const NavFooterContainer = styled.div`
  display: none;
  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 60px;

    background-color: #ffffff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;

    ${Flex({ justifyContent: "center" })}

    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const NavFooterWrapper = styled.ul`
  width: 100%;
  height: 100%;

  ${Flex({ alignItems: "center", justifyContent: "space-evenly" })}

  font-size: 18px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NavFooterCategoryItem = styled.li<{ isSelect: boolean }>`
  color: ${({ isSelect }) =>
    isSelect ? RollingPalette.main.Dark : RollingPalette.unEmphasize.Dark};
  white-space: nowrap;
  font-weight: ${({ isSelect }) => isSelect && "800"};
  padding-bottom: 10px;
  cursor: pointer;
`;
