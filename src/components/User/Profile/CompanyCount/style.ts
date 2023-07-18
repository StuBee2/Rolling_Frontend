import styled from "styled-components";

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
