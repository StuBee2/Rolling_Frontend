import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 0 15px 0 15px;
  white-space: nowrap;
  min-width: 450px;
  @media screen and (max-width: 450px) {
    height: 100%;
  }
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  column-gap: 10px;
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
`;
