import styled from "styled-components";

export const CompanyInfoContainer = styled.div`
  display: block;

  @media screen and (max-width: 1221px) {
    margin-left: -12%;
  }
  @media screen and (max-width: 1170px) {
    margin-left: -13%;
  }

  margin-left: -6.5%;
`;

export const MemberInfoContainer = styled.div`
  display: flex;
  margin: 70px 0 0 190px;
  width: 100%;
  height: 100%;
`;

export const MemberProfile = styled.img`
  border: 9px solid white;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 3;

  @media screen and (max-width: 1221px) {
    width: 100px;
    height: 100px;
    border: 7px solid white;
  }
  @media screen and (max-width: 760px) {
    width: 90px;
    height: 90px;
    border: 7px solid white;
  }
  @media screen and (max-width: 610px) {
    width: 85px;
    height: 85px;
    border: 6px solid white;
  }
`;

export const MemberNameBox = styled.div`
  width: 250px;
  height: 90px;
  background-color: #4869f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 15px 0 0 -100px;
  z-index: 2;
  padding: 20px 0 20px 115px;
  @media screen and (max-width: 1221px) {
    width: 200px;
    height: 80px;
    margin: 10px 0 0 -70px;
    padding: 15px 0 20px 90px;
  }
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 70px;
    margin: 10px 0 0 -40px;
    padding: 12px 0 20px 55px;
  }
  @media screen and (max-width: 610px) {
    width: 150px;
    height: 70px;
    margin: 10px 0 0 -40px;
    padding: 12px 0 20px 55px;
  }
`;

export const MemberNickName = styled.p`
  color: #f9fafb;
  font-family: "Pretendard";
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const MemberSocialLoginId = styled.p`
  color: #f9fafb;
  font-family: "Pretendard";
  font-size: 0.9rem;
  font-weight: 300;
`;

export const CompanyInfoMainContainer = styled.div`
  width: 1000px;
  height: 100%;
  border-radius: 10px;
  background: #f2f4f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: -60px 0 0 170px;
  padding: 20px 20px 20px 40px;
  z-index: 1;

  @media screen and (max-width: 1393px) {
    width: 900px;
    height: 100%;
  }
  @media screen and (max-width: 1221px) {
    width: 850px;
    height: 100%;
  }
  @media screen and (max-width: 1170px) {
    width: 750px;
    height: 100%;
  }
  @media screen and (max-width: 1045px) {
    width: 700px;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 580px;
    height: 100%;
  }
  @media screen and (max-width: 670px) {
    width: 500px;
    height: 100%;
  }
  @media screen and (max-width: 610px) {
    width: 400px;
    height: 100%;
  }
`;

export const CompanyInfoMainBox = styled.div`
  width: 1000px;
  height: 100%;
  border-radius: 10px;
  background: #f2f4f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: -60px 0 0 170px;
  padding: 20px 20px 20px 40px;
  z-index: 1;

  @media screen and (max-width: 1393px) {
    width: 900px;
    height: 100%;
  }
  @media screen and (max-width: 1221px) {
    width: 850px;
    height: 100%;
  }
  @media screen and (max-width: 1170px) {
    width: 750px;
    height: 100%;
  }
  @media screen and (max-width: 1040px) {
    width: 700px;
    height: 100%;
  }
`;
export const CompanyInfoMemberWritingDay = styled.p`
  color: #737b98;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 500;
  float: right;
`;

export const CompanyInfoTitle = styled.p`
  margin-top: 70px;
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 1.8rem;
  font-weight: 700;
`;

export const CompanyInfoContent = styled.p`
  margin-top: 15px;
  color: #737b98;
  font-family: "Pretendard";
  font-size: 0.9rem;
  font-weight: 600;
`;

export const CompanyInfoTextBox = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const CompanyBlockBox = styled.div`
  display: block;
`;
export const CompanyImage = styled.img`
  border-radius: 5px;
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CompanyName = styled.p`
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 1.3rem;
  font-weight: 700;
  display: block;
  margin: 8px 0 0 20px;
`;

export const CompanyAddress = styled.p`
  margin: 14px 0 0 20px;
  color: #737b98;
  font-family: "Pretendard";
  font-size: 0.9rem;
  font-weight: 400;
`;

export const CompanyDescription = styled.p`
  color: #080c2b;
  font-family: "Pretendard";
  font-size: 1.2rem;
  font-weight: 550;
  margin-top: 20px;
`;

export const CompanyInfoContentLine = styled.div`
  width: 98%;
  height: 3px;
  background: #dee0e6;
  margin-top: 20px;
`;

export const CompanyFacilitiesImageList = styled.div`
  display: flex;
`;

export const CompanyFacilitiesImage = styled.img`
  background-color: #d9d9d9;
  width: 295px;
  height: 165px;
  border-radius: 5px;
  margin: 30px 18px 10px 1px;
  @media screen and (max-width: 1221px) {
    width: 263px;
    height: 120px;
  }
  @media screen and (max-width: 1100px) {
    width: 253px;
    height: 110px;
  }
  @media screen and (max-width: 1040px) {
    width: 243px;
    height: 100px;
  }
`;

export const CompanyReviewBtn = styled.button`
  padding: 10px 19px 10px 19px;
  margin: 50px -20px 0 0;
  float: right;
  border-radius: 5px;
  border: none;
  background: #1d1e5a;
  color: white;
  cursor: pointer;
  font-family: "Pretendard";
  font-size: 0.9rem;
  font-weight: 500;
  :hover {
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
