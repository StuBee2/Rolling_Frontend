import styled from "styled-components";

export const MyInfoContainer = styled.div`
  width: 90%;
  height: 280px;
  background-color: #f3f4f5;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;

  @media screen and (max-width: 400px) {
    height: 240px;
  }
`;

export const BasicInfoContainer = styled.div`
  width: 100%;
  height: 170px;
  border-bottom: 2px solid #dee0e6;
  color: #61677e;

  @media screen and (max-width: 400px) {
    height: 150px;
  }
`;

export const GitUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 60%;
  margin-top: 10px;
`;

export const GitUserLogo = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 100%;
  object-fit: cover;

  @media screen and (max-width: 520px) {
    width: 70px;
    height: 70px;
  }
`;

export const GitUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const GitUserEmail = styled.div`
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`;

export const GitUserName = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

export const GitContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 10px;
`;

export const GitLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const GitLoginType = styled.div`
  color: #737b98;
  font-size: 14px;
  font-weight: 600;
  margin-left: 3px;
`;
