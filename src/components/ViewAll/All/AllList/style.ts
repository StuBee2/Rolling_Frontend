import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  column-gap: 20px;
  row-gap: 6rem;

  @media screen and (max-width: 1031px) {
    row-gap: 2.5rem;
  }

  ${FadeInAnimation};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  img {
    width: 25px;
    height: 25px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const RecommandBox = styled.div`
  width: 285px;
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
    flex-basis: 48.2%;
  }

  @media screen and (max-width: 650px) {
    flex-basis: 47.7%;
    height: 290px;
  }
`;

export const NoneData = styled.div`
  width: 100%;
  height: 600px;
`;
