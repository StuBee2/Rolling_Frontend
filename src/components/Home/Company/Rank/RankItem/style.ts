import styled from "styled-components";

export const RankItem = styled.div`
  width: 95%;
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
`;

export const CompanyRanking = styled.div`
  width: 54px;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: #fff;

  border-radius: 10px 0 0 10px;
  background-color: #1d1e5a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding-left: 20px;
`;

export const CompanyLogo = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CompanyName = styled.p`
  font-weight: bold;
`;

export const CompanyFeatures = styled.p`
  font-size: 12px;
  margin-top: 3px;
`;
