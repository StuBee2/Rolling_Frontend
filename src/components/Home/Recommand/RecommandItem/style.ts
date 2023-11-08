import { StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const RecommandItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const RecommandItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const RecommandItemBox = styled.div`
  width: 250px;
  height: 180px;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
  overflow: hidden;

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
  cursor: pointer;

  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ rgb }) => rgb || "#fff"};
  zoom: 0.85;
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  ${StopDrag}
`;
