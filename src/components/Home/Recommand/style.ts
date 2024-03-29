import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const RecommandContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 710px) {
    width: 99%;
  }
`;

export const SeniorRecommandContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
`;

export const SeniorRecommand = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  column-gap: 5px;
  img {
    width: 27px;
    height: 27px;
  }
`;

export const RecommandWrapper = styled.div`
  width: 100%;
  height: 240px;

  display: flex;
  ${FadeInAnimation};
`;
