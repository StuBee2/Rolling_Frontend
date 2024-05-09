import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const UserNavBar = styled.div`
  width: 420px;
  height: 100%;

  position: sticky;
  top: 90px;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const UserImg = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  object-fit: cover;
  border: 1px solid #dddddd;
  box-shadow: 0 3px 6px 0 rgba(29, 34, 53, 0.08);
`;

export const UserName = styled.p`
  font-size: 27px;
  font-weight: 700;
`;

export const UserEmail = styled.p<{ email: string }>`
  font-size: 17px;
  color: ${({ email }) =>
    email === null
      ? RollingPalette.main.Base
      : RollingPalette.unEmphasize.Dark};
  cursor: ${({ email }) => email === null && "pointer"};
`;

export const PageSelectContainer = styled.div`
  width: 100%;
  height: 300px;
  font-weight: bold;
  color: #61677e;

  ${Flex({ flexDirection: "column", rowGap: "10px" })}

  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const PageSelectWrapper = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "15px" })}

  border-bottom: 2px solid #dee0e6;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const PageSelectItem = styled.div<{ isSelect?: boolean }>`
  width: 100%;
  height: 60px;

  background-color: ${({ isSelect }) => isSelect && RollingPalette.main.Dark};
  color: ${({ isSelect }) => isSelect && "#ffffff"};
  border-radius: 8px;
  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;

  ${Flex({ alignItems: "center", columnGap: "10px" })}

  img {
    width: 24px;
    height: 24px;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ isSelect }) => (isSelect ? "#24357b" : "#eeeeee")};
    transform: scale(0.98);
  }
  &:active {
    background-color: ${({ isSelect }) => (isSelect ? "#2b3f94" : "#dddddd")};
  }
`;
