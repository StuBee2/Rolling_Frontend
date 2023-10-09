import { HoverAnimation } from "@src/styles/common.style";
import styled, { css } from "styled-components";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

export const RecommandContainer = styled.div`
  width: 100%;
  height: 282px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media screen and (max-width: 710px) {
    width: 99%;
  }
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
  height: 260px;
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff;

  display: flex;
`;

export const HomeItemContainer = styled.div`
  width: calc(100% - 100px);
  height: 100%;
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowStyle = css`
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 5px;
  ${HoverAnimation};
`;

export const ArrowLeft = styled(BsArrowLeft)`
  ${ArrowStyle};
`;

export const ArrowRight = styled(BsArrowRight)`
  ${ArrowStyle};
`;
