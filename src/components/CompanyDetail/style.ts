import styled from "styled-components";

export const CompanyDetailContainer = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px 15px 15px;
  @media screen and (max-width: 635px) {
    width: 635px;
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

  @media screen and (min-width: 635px) {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CustomHeader = {
  minWidth: "635px",
  heigth: "85px",
  borderBottom: "1px solid #dddddd",
};
