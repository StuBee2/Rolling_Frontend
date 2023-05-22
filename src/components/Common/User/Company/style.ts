import styled, { css } from "styled-components";

export const CommonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const ScrollBox = styled.div`
  width: 681px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 199px;

  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 2px 2px 14px 0 rgba(0, 164, 73, 0.08);

  display: flex;
  flex-direction: column;
`;

export const Able = styled.div<{ isTop: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;

  ${({ isTop }) =>
    isTop
      ? css`
          height: 50px;
          padding: 10px 17px 0 17px;
          justify-content: space-between;
        `
      : css`
          height: 70px;
          justify-content: space-evenly;
          padding: 0 10px 0 10px;

          button {
            width: 49%;
            height: 35px;

            border: 1px solid #d9d9d9;
            border-radius: 5px;
            background-color: #ffffff;

            font-weight: 500;
            cursor: pointer;
            outline: none;
          }
        `};
`;
