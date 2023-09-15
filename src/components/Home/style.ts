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
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 20px;
  display: flex;
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
`;
