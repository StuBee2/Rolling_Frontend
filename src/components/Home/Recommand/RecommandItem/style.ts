import { StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const RecommandItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  overflow-x: scroll;
  padding-bottom: 7px;
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

  img {
    width: 100%;
    height: 167px;

    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;

    transform: scale(1);
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(0.98);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
    }

    ${StopDrag}
  }
  p {
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    margin-top: 5px;
  }

  @media screen and (max-width: 1010px) {
    width: 200px;
  }
`;
