import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1025px) {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  width: 90%;
`;

export const CompanyStatusWrap = styled.div`
  width: 90%;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

export const CompanyStatusContainer = styled.div`
  width: 100%;
  height: 183px;
  background-color: #4869f6;
  border-radius: 10px;

  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const CompanyStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CompanyNumber = styled.div`
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 4rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #4869f6;
  text-align: center;
  line-height: 45px;
  font-size: 22px;
`;

export const CompanyNumberText = styled.div`
  color: #f9fafb;
  font-size: 18px;
  font-weight: bold;
`;

export const StatusText = styled.div`
  color: #dee0e6;
  font-size: 12px;
  margin-top: 10px;
`;

export const MyInfoContainer = styled.div`
  width: 90%;
  height: 280px;
  background-color: #f3f4f5;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;

  @media screen and (max-width: 400px) {
    height:240px;
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

export const Explain = styled.div`
  font-size: 15px;
  white-space: nowrap;
  color: #61677e;
  margin-top: 10px;

  @media screen and (max-width: 520px) {
    font-size: 11px;
  }
  @media screen and (max-width: 400px) {
    display: none;
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

export const GitUserEmail = styled.div`
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`;

export const GitUserName = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
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
