import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  zoom: 0.8;

  padding: 90px 15px 15px 15px;
  min-width: 500px;
`;

export const Wrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;

  @media screen and (max-width: 1005px) {
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
  }

  @media screen and (max-width: 500px) {
    row-gap: 0rem;
  }
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
