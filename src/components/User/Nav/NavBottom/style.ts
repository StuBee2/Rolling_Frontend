import styled from "styled-components";

export const UserFooter = styled.div`
  display: none;
  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 60px;

    background-color: #ffffff;
    border-top: 1px solid #d9d9d9;
    display: inline;
  }
`;

export const UserListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 15px;
  font-size: 18px;
  overflow-x: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserCategory = styled.li<{ isSelect: boolean }>`
  color: ${(props) => (props.isSelect ? "#1d1e5a" : "#61677e")};
  white-space: nowrap;
  font-weight: ${(props) => props.isSelect && "800"};
  padding-bottom: 10px;
  cursor: pointer;
`;
