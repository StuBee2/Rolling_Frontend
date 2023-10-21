import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;
  justify-content: center;

  background-color: #f9fafb;
  white-space: nowrap;
  min-width: 500px;

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;

  flex-direction: column;
  row-gap: 5rem;

  @media screen and (max-width: 1385px) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (max-width: 1165px) {
    width: 90%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  column-gap: 10px;
`;
