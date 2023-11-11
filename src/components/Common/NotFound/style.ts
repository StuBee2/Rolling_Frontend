import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorBox = styled.div`
  width: 50vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  margin: 0 10px 0 10px;
  font-weight: bold;
`;

export const ErrorText = styled.p`
  font-size: 100px;
`;

export const GoHomeBtn = styled.button`
  width: 100%;
  height: 50px;
  color: #ffffff;
  background-color: ${RollingPalette.main.Dark};
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(28, 31, 91, 0.91);
    transform: scale(0.98);
  }
  &:active {
    background-color: rgba(28, 31, 91, 0.93);
  }
`;
