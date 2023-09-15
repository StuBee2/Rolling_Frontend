import styled from "styled-components";

export const HomeListContainer = styled.div`
  width: calc(100% - 620px);
  height: 100%;
  display: flex;
  @media screen and (max-width: 1393px) {
    justify-content: center;
  }
  @media screen and (max-width: 1040px) {
    width: calc(100% - 270px);
  }
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const HomeListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1393px) {
    width: 335px;
  }
  @media screen and (min-width: 740px) {
    padding-left: 20px;
  }
`;

export const SeniorRecommand = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  p {
    margin-top: 5px;
  }
`;

export const HomeItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5px;
`;
