import styled from "styled-components";

export const CompanyStatus = styled.div`
  width: 45%;
  height: 125px;
  background-color: #4869f6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  color: #f9fafb;
  img {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ListWrap = styled.div`
  width: 100%;
  padding-top: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 250px;
  cursor: pointer;
  background-color: #f3f4f5;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  color: #61677e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px 0 40px;
  gap: 20px;

  @media screen and (max-width: 650px) {
    height: 300px;
  }
`;

export const ListRegistDate = styled.div`
  font-weight: bold;
`;

export const CompanyContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const CompanyImg = styled.img`
  width: 90px;
  height: 90px;

  border-radius: 5px;
  object-fit: cover;

  @media screen and (max-width: 650px) {
    width: 80px;
    height: 80px;
  }
`;

export const CompanyAbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const CompanyName = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`;

export const CompanyAddress = styled.div`
  font-size: 18px;
`;

export const CompanyPostitionCareerPathContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #000;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const CompanyPostitionCareerPath = styled.span`
  color: #1d1e5a;
  font-weight: bold;
`;
