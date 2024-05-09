import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const Container = styled.div<{ positionTop: string }>`
  position: absolute;

  width: 100%;
  max-height: 225px;

  border: 2px solid #d9d9d9;
  background-color: #fff;
  border-radius: 5px;

  top: ${({ positionTop }) => positionTop};

  z-index: 3;
  overflow-y: auto;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;

  ${Flex({ flexDirection: "column" })}

  li {
    width: 100%;
    height: 55px;

    padding-left: 20px;
    line-height: 25px;
    font-size: 17px;

    ${Flex({ alignItems: "center" })}
    cursor: pointer;

    &:hover {
      background-color: rgba(242, 244, 245, 1);
    }
  }
`;
