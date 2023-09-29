import styled, { css } from "styled-components";

export const UserWrap = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  min-width: 450px;
  @media screen and (max-width: 450px) {
    height: 100%;
  }
`;

export const UserContainer = styled.div`
  width: 1370px;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1385px) {
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
  @media screen and (max-width: 1040px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 3rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Explain = styled.div`
  font-size: 14.7px;
  color: #61677e;
  margin-top: 10px;
`;

export const FontSize = styled.p<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;

export const ReviewStatusCommonHover = css`
  transform: scale(1);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #5a78f7;
    transform: scale(0.99);
  }
`;
