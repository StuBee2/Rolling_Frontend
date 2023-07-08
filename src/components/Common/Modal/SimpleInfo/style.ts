import styled from "styled-components";

export const SimpleInfoContainer = styled.div`
  width: 337px;
  height: 224px;
  background-color: #2b2c30;

  position: absolute;
  top: 100px;
  right: 4%;

  z-index: 2;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
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
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Name = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
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
