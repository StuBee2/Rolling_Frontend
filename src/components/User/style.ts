import styled from "styled-components";

export const UserWrap = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  @media screen and (max-width: 450px) {
    width: 450px;
    height: 100%;
  }
`;

export const UserContainer = styled.div`
  width: 1370px;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1355px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }
  @media screen and (max-width: 1040px) {
    flex-direction: column;
    height: calc(100% - 60px);
  }
`;

export const UserListContainer = styled.div`
  width: calc(100% - 420px);
  height: 100%;
  padding-top: 40px;

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

export const FontSize = styled.p<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;
