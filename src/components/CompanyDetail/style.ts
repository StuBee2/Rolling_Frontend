import styled from "styled-components";

export const CompanyDetailContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px 15px 15px;
  @media screen and (max-width: 500px) {
    width: 500px;
  }
`;

export const CompanyDetailWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  @media screen and (max-width: 1370px) {
    width: 100%;
  }
  @media screen and (max-width: 1005px) {
    align-items: center;
    flex-direction: column;
    row-gap: 3rem;
  }

  @media screen and (min-width: 500px) {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CustomHeader = {
  minWidth: "500px",
  height: "90px",
  borderBottom: "1px solid #dddddd",
};
