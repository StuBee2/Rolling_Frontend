import styled from "styled-components";
import { HiArrowUp } from "react-icons/hi";
import { AiFillExclamationCircle } from "react-icons/ai";

export const body = styled.body`
  width: 100vw;
  height: 100vh;
  background: #101013;
  color: white;
`;

export const container = styled.div``;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202026;
  width: 10%;
  height: auto;
  box-sizing: border-box;
  border-radius: 2%;
  margin: 2% 0 0 85.5%;
`;

export const ProfilImg = styled.img`
  width: 25%;
  height: auto;
  margin-bottom: 3%;
  margin-right: 3%;
`;

export const ProfilName = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 100%;
  margin-right: 3%;
`;

export const rankingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: 40px;
  background: #18181d;
  border: 1px solid #00ba91;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 1.5% 0 1% 15.5%;
`;

export const rankingImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 5% 0 -10%;
`;

export const rankerName = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 85%;
`;

export const mainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mapBox = styled.div`
  border-radius: 5px;
`;

export const chattingBox = styled.div`
  width: 18%;
  height: 65vh;
  background: #202026;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-left: 1%;
`;

export const chatting = styled.div`
  position: relative;
  top: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const chattingInp = styled.input`
  box-sizing: border-box;
  width: 78%;
  height: 30px;
  background: #202026;
  border: 1px solid #00ba91;
  border-radius: 5px;
  margin-right: 1%;
  outline: 0;
  padding-left: 4%;
  color: white;
  font-size: 85%;
`;

export const HiArrowUpIcon = styled(HiArrowUp)``;

export const chattingBtn = styled.button`
  width: 9%;
  height: 23px;
  background: rgba(0, 186, 145, 0.9);
  border-radius: 100px;
  border: 0;
`;

export const bottomItems = styled.div`
  display: flex;
  margin-top: 1%;
`;

export const AiFillExclamationCircleIcon = styled(AiFillExclamationCircle)`
  width: 3.8vw;
  height: 3.8vh;
  color: #aaaaaa;
  position: relative;
  left: 95vw;
`;
