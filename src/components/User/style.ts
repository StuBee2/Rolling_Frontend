import styled from "styled-components";

export const UserWrap = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: #f9fafb;

  display: flex;
  justify-content: center;
`;

export const UserContainer = styled.div`
  width: 1370px;
  height: 100%;
  display: flex;

  @media screen and (max-width: 1620px) {
    width: 1270px;
  }
  @media screen and (max-width: 1355px) {
    width: 1000px;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const UserListContainer = styled.div`
  width: calc(100% - 420px);
  height: 100%;
  padding-top: 40px;

  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;
