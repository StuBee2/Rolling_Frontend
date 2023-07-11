import styled from "styled-components";

export const UserHeader = styled.div`
  display: none;
  @media screen and (max-width: 1025px) {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;

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
  font-size: 18px;
`;

export const UserCategory = styled.li<{ isSelect: boolean }>`
  color: ${(props) => (props.isSelect ? "#1d1e5a" : "#61677e")};
  white-space: nowrap;
  font-weight: ${(props) => props.isSelect && "800"};
  padding-bottom: 10px;
  cursor: pointer;
`;
