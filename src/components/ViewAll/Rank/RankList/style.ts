import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding-bottom: 10px;

  img {
    width: 25px;
    height: 25px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const SliderButton = styled.button`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

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
  height: auto;
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

export const Content = styled.div`
  display: flex;
  felx-wrap: wrap;
  column-gap: 2rem;
`;

export const RankBox = styled.div`
  width: 275px;
  height: 320px;

  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 1215px) {
    flex-basis: 32%;
  }

  @media screen and (max-width: 1031px) {
    flex-basis: 48.7%;
    height: 350px;
  }

  @media screen and (max-width: 850px) {
    flex-basis: 48.3%;
  }

  @media screen and (max-width: 650px) {
    flex-basis: 47.7%;
    height: 290px;
  }
`;

export const NoneData = styled.div`
  width: 100%;
  height: 250px;
`;
