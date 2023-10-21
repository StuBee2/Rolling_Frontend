import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 1370px;
  height: calc(100% - 90px);
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 1355px) {
    width: 100%;
  }
`;

export const MyInfoBox = styled.div`
  width: 337px;
  height: 224px;
  background-color: #2b2c30;
  z-index: 3;
  border-radius: 15px;
  position: absolute;
  top: 0;
  right: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 52%;
  border-radius: 15px 15px 0 0;
  border-bottom: 2px solid rgba(222, 224, 230, 0.3);
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding-left: 20px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;

export const Name = styled.p`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
`;

export const GitInfo = styled.div`
  color: #4869f6;
  cursor: pointer;
  display: flex;
  column-gap: 5px;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const MyPageLogout = styled.div`
  width: 100%;
  height: 48%;
  border-radius: 0 0 15px 15px;
  color: #ffffff;
  font-size: 18px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  div {
    display: flex;
    column-gap: 10px;
    align-items: center;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
