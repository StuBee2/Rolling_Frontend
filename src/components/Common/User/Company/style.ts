import styled, { css } from "styled-components";

export const CommonWrap = styled.div`
  width: 85%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin-top: 20px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 220px;

  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 2px 2px 14px 0 rgba(0, 164, 73, 0.08);
  border: 1px solid #d9d9d9;

  display: flex;
  flex-direction: column;
`;

export const Able = styled.div<{ isTop: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  color: #999999;

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

export const Body = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-left: 20px;

  div {
    img {
      width: 90px;
      height: 90px;
      cursor: pointer;

      object-fit: cover;
      border-radius: 5px;
    }
  }

  ul {
    width: calc(100% - 95px);
    height: 100px;

    list-style-type: none;
    color: #000000;

    font-size: 15px;
    font-weight: 600;
    overflow-y: scroll;
    padding-left: 20px;

    li {
      line-height: 22px;
    }

    @media screen and (max-width: 550px) {
      font-size: 13px;
      font-weight: 700;
    }

    @media screen and (max-width: 394px) {
      font-size: 10px;
    }
  }
`;
