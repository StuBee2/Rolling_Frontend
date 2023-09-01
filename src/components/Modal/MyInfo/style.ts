import styled from "styled-components";

export const InfoModalWrapper = styled.div`
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

export const InfoModalParentBox = styled.div`
  width: 1370px;
  height: calc(100% - 108px);
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 1355px) {
    width: 100%;
  }
`;

export const InfoModalContainer = styled.div`
  width: 337px;
  height: 224px;
  background-color: #2b2c30;
  z-index: 3;
  border-radius: 15px;
  position: absolute;
  top: 0;
  right: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 360px) {
    width: 285px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: 52%;
  border-radius: 15px 15px 0 0;
  border-bottom: 2px solid rgba(222, 224, 230, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
  div {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Name = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const EditProfile = styled.div`
  color: #4869f6;
  cursor: pointer;
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
      width: 18px;
      height: 20px;
    }
  }
`;
