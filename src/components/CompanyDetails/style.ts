import styled from "styled-components";

export const CompanyDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  margin: 5% 6% 10% 6%;
  overflow: hidden;

  @media screen and (max-width: 1221px) {
    margin: 5% 6% 10% 4.3%;
  }
  @media screen and (max-width: 1040px) {
    margin: 5% 6% 10% 4.8%;
  }
  @media screen and (max-width: 760px) {
    margin-left: -1%;
  }
  @media screen and (max-width: 610px) {
    margin-left: -9%;
  }
`;

export const CompanyDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CompanyDetailsBox = styled.div`
  display: block;
`;
