import styled from "styled-components";

export const UserWrap = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: #f9fafb;

  display: flex;
  justify-content: center;
`;

export const UserContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 1250px) {
    width: 90%;
  }
`;

export const UserListContainer = styled.div`
  width: calc(100% - 330px);
  height: 100%;
  padding-top: 40px;
  
  padding-left:20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    height: calc(100% - 80px);
  }
`;
