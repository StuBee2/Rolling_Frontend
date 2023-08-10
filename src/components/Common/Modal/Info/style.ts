import styled from "styled-components";

export const SimpleInfoWrapper = styled.div`
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

export const SimpleInfoParentBox = styled.div`
  width: 1570px;
  height: calc(100% - 108px);
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 1620px) {
    width: 1270px;
  }
  @media screen and (max-width: 1355px) {
    width: 1000px;
  }
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
`;

export const SimpleInfoModal = styled.div`
  width: 337px;
  height: 224px;
  background-color: #2b2c30;
  z-index: 3;
  border-radius: 15px;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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

  &:hover {
    border-bottom: 1px solid #4869f6;
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
  gap: 20px;

  div {
    cursor: pointer;
  }
`;
