import styled from "styled-components";

export const CompanyStatusWrap = styled.div`
  width: 90%;
  display: flex;
  column-gap: 10px;
  @media screen and (max-width: 565px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 25px;
  }
`;

export const CompanyStatusContainer = styled.div`
  width: 100%;
  height: 183px;
  background-color: #4869f6;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CompanyStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  img {
    width: 53px;
    height: 53px;
  }
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
