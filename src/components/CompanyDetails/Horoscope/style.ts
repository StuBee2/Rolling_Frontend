import styled from "styled-components";
export const CompanyHoroscopeContainer = styled.div`
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CompanyTitle = styled.div`
  width: 100%;
  text-align: center;
`;

export const CompanyImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1040px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 740px) {
  }
`;

export const CompanyName = styled.h1`
  color: #000;
  font-family: "Pretendard";
  font-size: 1.5rem;
  font-weight: 650;
  margin-left: -3%;
  padding-top: 8%;
  margin-bottom: 8%;
`;

export const HoroscopeContainer = styled.div`
  width: 210px;
  height: 405px;
  border-radius: 7px;
  background-color: #f7f9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1155px) {
    width: 190px;
    height: 385px;
  }
  @media screen and (max-width: 1040px) {
    width: 180px;
    height: 375px;
  }
`;

export const HoroscopeTitle = styled.h1`
  color: #080c2b;
  font-family: "Pretendard";
  font-size: 110%;
  font-weight: 600;
  padding-top: 12%;
  padding-left: 7%;
`;

export const HoroscopeItemTitle = styled.h5`
  color: #080c2b;
  font-family: "Pretendard";
  font-size: 100%;
  font-weight: 500;
  text-align: center;
  margin-top: 10%;
  margin-left: -26%;
`;

export const HoroscopeItems = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
`;
