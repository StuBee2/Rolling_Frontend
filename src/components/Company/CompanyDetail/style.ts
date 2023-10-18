import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 15px 15px 15px;
  min-width: 500px;
  padding-top: 90px;

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;

  @media screen and (max-width: 1370px) {
    width: 100%;
  }
  @media screen and (max-width: 1005px) {
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
  }

  @media screen and (max-width: 500px) {
    row-gap: 0rem;
  }

  @media screen and (min-width: 500px) {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;