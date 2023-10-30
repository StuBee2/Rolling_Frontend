import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10rem;
  justify-content: center;

  background-color: #f9fafb;
  white-space: nowrap;
  min-width: 500px;
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;

  flex-direction: column;
  row-gap: 8rem;

  @media screen and (max-width: 1165px) {
    width: 90%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  column-gap: 10px;
`;

export const ViewAll = styled.p`
  cursor: pointer;
  padding: 10px;

  margin-top: 3px;
  font-weight: bold;
  color: rgba(115, 123, 152, 1);

  ${HoverAnimation};
`;
