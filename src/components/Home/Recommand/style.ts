import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const RecommandContainer = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column" })}

  @media screen and (max-width: 710px) {
    width: 99%;
  }
`;

export const SeniorRecommand = styled.div`
  font-size: 22px;
  font-weight: bold;

  ${Flex({ alignItems: "center", columnGap: "5px" })}

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
