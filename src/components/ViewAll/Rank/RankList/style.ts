import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const TitleContainer = styled.div`
  border-bottom: 1px solid #ddd;
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const Title = styled.div`
  padding-bottom: 10px;
  ${Flex({ alignItems: "center", columnGap: "5px" })}

  img {
    width: 25px;
    height: 25px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const SliderButton = styled.button`
  width: 25px;
  height: 25px;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 5px;

  transition: all 0.2s ease-in-out;
  transform: scale(1);

  img {
    width: 10px;
    height: 10px;
  }

  &:active {
    transform: scale(0.99);
    background-color: #ddd;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  overflow-x: auto;
  scroll-behavior: smooth;

  @media screen and (min-width: 650px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  ${FadeInAnimation};
`;

export const RankBox = styled.div`
  width: 273px;
  height: 320px;

  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 985px) {
    flex-basis: 31.5%;
  }
  @media screen and (max-width: 645px) {
    flex-basis: 48%;
    width: 267px;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 47.6%;
    width: 223px;
  }
`;

export const NoneData = styled.div`
  width: 100%;
  height: 250px;
`;
