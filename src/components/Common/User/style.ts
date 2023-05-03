import styled, { css } from "styled-components";

export const UserContainer = styled.div`
  width: calc(100% - 218px);
  height: calc(100vh - 63px);

  position: absolute;
  bottom: 0;
  right: 109px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const UserNameContainer = styled.div`
  width: 100%;
  height: 238px;
  background-color: #d9d9d9;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;

    border-radius: 6rem;
    object-fit: cover;

    background-color: #d9d9d9;
    border: 3px solid black;
  }
`;

export const UserAbleContainer = styled.div`
  width: 100%;
  height: calc(100vh - 256px);

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  background-color: #eff2f7;
`;


export const UserInfoContainer = styled.div`
  width: 374px;
  height: 560px;
  margin-top: 23px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
`;

export const SkillsContainer = styled.div`
  width: 345px;
  height: 130px;

  background-color: #ffffff;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
`;

export const RevieListContainer = styled.div`
  width: 345px;
  height: 240px;

  background-color: #ffffff;
  border: 2px solid #d9d9d9;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  width: 345px;
  height: 100px;

  background-color: #ffffff;
  border: 2px solid #d9d9d9;

  border-radius: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;

  div {
    width: 150px;
    height: 50px;

    border: 1px solid #d9d9d9;
    border-radius: 15px;

    text-align: center;
    line-height: 50px;

    color: black;
    cursor: pointer;

    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #d9d9d9;
      color: #ffffff;
    }
  }
`;

export const UserReviewContainer = styled.div`
  width: 787px;
  height: 560px;

  padding: 15px;
  margin: 20px 10px 0 0;

  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div<{ isCompany: boolean }>`
  ${({ isCompany }) =>
    isCompany
      ? css`
          width: 330px;
          height: 95%;
        `
      : css`
          width: 770px;
          heigt: 100vh;
        `}
  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;
  box-sizing: border-box;

  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Lists = styled.div<{ isReview: boolean }>`
  ${({ isReview }) =>
    isReview
      ? css`
          width: 762px;
          height: 212px;
        `
      : css`
          width: 320px;
          height: 120px;
        `}

  background-color: white;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
