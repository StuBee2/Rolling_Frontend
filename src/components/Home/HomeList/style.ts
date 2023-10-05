import styled from "styled-components";

export const HomeListContainer = styled.div`
  width: calc(100% - 620px);
  height: 100%;
  display: flex;
  padding-left: 1rem;
  @media screen and (max-width: 1393px) {
    justify-content: center;
  }
  @media screen and (max-width: 1040px) {
    width: calc(100% - 270px);
  }
  @media screen and (max-width: 740px) {
    width: 100%;
    padding-left: 0;
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
  @media screen and (max-width: 740px) {
    width: 500px;
  }
  @media screen and (max-width: 450px) {
    width: 335px;
  }
`;

export const SeniorRecommand = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  column-gap: 5px;
  img {
    width: 27px;
    height: 27px;
  }
`;

export const HomeItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  margin-top: 10px;
`;
