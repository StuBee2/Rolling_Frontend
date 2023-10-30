import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const GuideText = styled.p`
  font-size: 15px;
  color: rgba(72, 105, 246, 0.81);

  display: flex;
  align-items: center;
  padding-left: 10px;

  width: 100%;
  height: 40px;
  background-color: rgba(222, 224, 230, 1);

  ${FadeInAnimation};
`;
