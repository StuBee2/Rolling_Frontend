import styled from "styled-components";

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
  background-color: #00ba91;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    
    border-radius: 6rem;

    background-color: #d9d9d9;
    border: 3px solid black;
  }

  div {
    font-size: 30px;
    font-weight: bold;

    color: #ffffff;
    margin-top: 20px;
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
  border: 2px solid #00ba91;

  border-radius: 10px;
`;

export const AbleContainer = styled.div`
  width: 345px;
  height: 240px;

  background-color: #ffffff;
  border: 2px solid #00ba91;

  border-radius: 10px;
`;

export const RegisterContainer = styled.div`
  width: 345px;
  height: 100px;

  background-color: #ffffff;
  border: 2px solid #00ba91;

  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const RegisterBtn = styled.div`
  width: 150px;
  height: 50px;

  border: 1px solid #00ba91;
  border-radius: 15px;

  text-align: center;
  line-height: 50px;

  color: #00ba91;
  cursor: pointer;

  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #00ba91;
    color: #ffffff;
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

export const ReviewWrap = styled.div`
  width: 770px;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    width: 762px;
    height: 212px;

    background-color: white;
    border: 2px solid #00ba91;

    border-radius: 10px;
    margin-top: 10px;
  }
`;
