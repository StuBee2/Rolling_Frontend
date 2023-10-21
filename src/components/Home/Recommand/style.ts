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
  justify-content: center;

  &:hover {
    overflow-x: scroll;
  }
  // 모바일
  @media (hover: none) and (pointer: coarse) {
    overflow-x: scroll;
  }
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
