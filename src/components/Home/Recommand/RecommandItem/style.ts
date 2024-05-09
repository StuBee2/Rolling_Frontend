import { StopDrag } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const RecommandItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const RecommandItemBox = styled.div`
  width: 250px;
  height: 200px;

  ${Flex({ flexDirection: "column", justifyContent: "center", rowGap: "5px" })}

  p {
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    margin-top: 5px;
  }

  @media screen and (max-width: 1010px) {
    width: 220px;
  }
`;

export const ImageContainer = styled.div<{ rgb: string }>`
  width: 100%;
  height: 167px;

  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;

  ${Flex({ justifyContent: "center" })}
  overflow: hidden;
  background-color: ${({ rgb }) => rgb || "#fff"};
  zoom: 0.85;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${StopDrag}
`;
