import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 90px;

  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  align-items: center;
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
  column-gap: 10px;
  @media screen and (max-width: 1394px) {
    width: 1150px;
  }
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
`;
