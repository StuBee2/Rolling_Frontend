import styled from "styled-components";
import { HiArrowUp } from "react-icons/hi";
import { AiFillExclamationCircle } from "react-icons/ai";

export const body = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #101013;
  color: white;
  overflow: hidden;
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: #202026;
  width: 150px;
  height: 50px;

  box-sizing: border-box;
  border-radius: 2%;
  margin-left: 85.5%;

  cursor: pointer;
`;

export const ProfilImg = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 2px;
  border-radius: 4rem;
`;

export const ProfilName = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;

  margin: 0 3% 0 7px;
  max-width: 105px;
  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const mainContainer = styled.div<{ isToken: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: auto;
  overflow: hidden;
  margin: ${({ isToken }) => (isToken ? "0" : "3%")};
`;

export const rankingContainer = styled.div`
  width: 120px;
  height: 40px;

  background-color: #18181d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 40px;

  border: 1px solid #00ba91;
  border-radius: 5px;

  display: flex;
  align-items: center;

  padding: 10px;
  margin: 0 0 10px 0;

  cursor: pointer;
`;

export const rankingImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const rankerName = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  margin-left: 5px;
`;

export const mapBox = styled.div`
  border-radius: 5px;
  width: 50vw;
  height: 65vh;
`;

export const chattingContainer = styled.div`
  width: 290px;
  height: 65vh;

  background-color: #202026;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-left: 1%;
  display: flex;
  flex-direction: column;
`;

export const chetting = styled.div`
  width: 100%;
  height: 60vh;
`;

export const chettingInputContainer = styled.div`
  width: 100%;
  height: 5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    width: 85%;
    height: 30px;

    background-color: #202026;
    border: 1px solid #00ba91;
    border-radius: 5px;
    outline: none;

    color: #ffffff;
    padding-left: 5px;
  }

  div {
    width: 30px;
    height: 30px;

    background-color: #00ba91;
    border-radius: 4rem;
    margin-left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export const HiArrowUpIcon = styled(HiArrowUp)`
  width: 15px;
  height: 15px;
  color: #202026;
  cursor: pointer;
`;

export const AiFillExclamationCircleIcon = styled(AiFillExclamationCircle)`
  width: 30px;
  height: 30px;

  color: #aaaaaa;
  float: right;
  position: absolute;
  right: 40px;
  bottom: 30px;

  cursor: pointer;
`;
