import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${Flex({ flexWrap: "wrap", columnGap: "20px", rowGap: "6rem" })}

  @media screen and (max-width: 1031px) {
    row-gap: 2.5rem;
  }

  ${FadeInAnimation};
`;

export const Title = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const CompanyBox = styled.div`
  width: 282px;
  height: 320px;

  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 985px) {
    flex-basis: 31.5%;
  }
  @media screen and (max-width: 645px) {
    flex-basis: 48%;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 47.6%;
  }
`;

export const NoneData = styled.div`
  width: 100%;
  height: 600px;
`;
