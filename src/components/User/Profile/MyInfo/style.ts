import styled from "styled-components";

export const MyInfoContainer = styled.div`
  width: 90%;
  height: 280px;
  background-color: #f3f4f5;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const BasicInfoContainer = styled.div`
  width: 100%;
  height: 170px;
  color: #61677e;
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
`;

export const GitUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const GitUserEmail = styled.p`
  @media screen and (max-width: 385px) {
    font-size: 11px;
  }
`;

export const GitUserName = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

export const GitContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 10px;
  border-top: 2px solid #dee0e6;
`;

export const GitLink = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const GitLoginType = styled.p`
  color: #737b98;
  font-size: 14px;
  font-weight: 600;
  margin-left: 3px;
`;
