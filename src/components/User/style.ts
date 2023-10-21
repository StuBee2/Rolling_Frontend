import styled, { css } from "styled-components";

export const UserContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 2rem;
  min-width: 500px;
  padding-top: 90px;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const UserWrapper = styled.div`
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

export const UserListContainer = styled.div<{ page: boolean }>`
  width: calc(100% - 420px);
  height: 100%;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ page }) =>
    page &&
    css`
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    `}

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 3rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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

export const StoryStatusCommonHover = css`
  transform: scale(1);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #5a78f7;
    transform: scale(0.99);
  }
`;
