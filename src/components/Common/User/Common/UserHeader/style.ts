import styled from "styled-components";

export const UserHeader = styled.div`
  display: none;
  @media screen and (max-width: 1025px) {
    width: 100%;
    height: 150px;
    position: sticky;
    top: 0;

    background-color: #ffffff;
    box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const UserListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
`;
