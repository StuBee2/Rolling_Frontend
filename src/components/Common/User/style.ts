import styled from "styled-components";

export const UserWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f6f8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  width: 1250px;
  height: 100%;
  display: flex;

  @media screen and (max-width: 1250px) {
    width: 1025px;
  }

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

export const UserListContainer = styled.div`
  width: 855px;
  height: 100%;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    height: calc(100% - 150px);
  }
`;
