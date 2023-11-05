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
