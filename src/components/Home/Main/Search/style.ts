import styled from "styled-components";

export const SearchContainer = styled.div`
  width: calc(100% - 290px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1105px) {
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  overflow-y: hidden;
  padding-bottom: 10px;
`;

export const SearchTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  column-gap: 10px;
  img {
    width: 27px;
    height: 27px;
  }
  p {
    span {
      color: rgba(236, 106, 94, 1);
    }
  }
`;
