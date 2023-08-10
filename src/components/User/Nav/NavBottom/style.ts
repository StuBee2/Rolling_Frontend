import styled from "styled-components";

export const UserFooter = styled.div`
  display: none;
  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 80px;

    background-color: #ffffff;
    box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 15px;
  font-size: 18px;
  overflow-x: scroll;

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
