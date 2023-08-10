import styled from "styled-components";

export const CompanyDetailBox = styled.div`
  display: flex;
`;

export const CompanySidebarBox = styled.div``;
export const CompanySidebar = styled.div`
  display: flex;

  margin-top: 10%;
`;

export const CompanySidebarList = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 450px;
  height: 150px;
  .company-Name {
    margin-top: 10px;

    font-size: 25px;
    font-weight: bold;
  }
`;

export const CompanyStarBox = styled.div`
  display: flex;
  width: 450px;
  justify-content: center;
`;

export const CompanyStar = styled.div`
  display: flex;
  width: 250px;
  height: 440px;
  background-color: #1d1e5a;
  border-radius: 10px;
`;
export const CompanyProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CompanyText = styled.div`
  margin-top: 1%;
  .title {
    font-size: 34px;
    font-weight: bold;

    margin-bottom: 8px;
  }

  .text {
    color: #61677e;
  }
`;

export const Title = styled.div`
  font-size: 34px;
  font-weight: bold;

  margin-bottom: 8px;
`;

export const Text = styled.div`
  color: #61677e;
`;
export const StarTitleBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 22px;

  .StarTitleIcon {
    display: flex;
    align-items: center;

    color: #ff9400;
    font-size: 25px;
  }

  .StarTitle {
    color: white;

    font-size: 18px;
    font-weight: bold;

    margin-top: 3px;
  }
`;

export const CompanyProfileBox = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 2%;
`;
export const CompanyProfileImg = styled.div``;
export const ProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  box-shadow: 0 5px 5px -4px black;
  border-radius: 100px;

  width: 125px;
  height: 125px;

  .ProfileImg {
    display: flex;
    justify-content: center;
  }
`;

export const ProfileNameBox = styled.div`
  display: flex;
  align-items: center;
  z-index: -1;
`;

export const ProfileNamelist = styled.div`
  width: 190px;
  height: 70%;

  margin-left: -30px;

  border-radius: 5px;

  background-color: #4869f6;
  box-shadow: 0 5px 5px -4px black;
  .ProfileName {
    display: flex;

    margin-left: 40px;
    margin-top: 20px;

    font-weight: bold;
    font-size: 19px;
    color: white;
  }
`;

export const CompanyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -2;
`;
export const CompanyInfoList = styled.div`
  background-color: #f3f4f5;
  box-shadow: 3px 3px 3px 3px #bfc0c0;
  border-radius: 8px;
  width: 60vw;
  height: 50vh;
  margin-top: -5%;
  margin-bottom: 2%;
`;
export const CompanyBasicInfo = styled.div`
  margin-top: 7%;
  margin-left: 3%;
  margin-bottom: 3%;
  .defalut-data {
    color: #61677e;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const defalutdata = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  .defalut-icon {
    color: #503528;
    display: flex;
    margin-top: -2px;
  }
`;

export const CompanyDetailInfo = styled.div`
  border-bottom: 3px solid #dee0e6;
  width: 95%;
  height: 28%;
  margin-left: 20px;

  .company-description {
    width: 580px;
    margin-left: 1%;
    font-weight: bold;
    font-size: 15px;
  }
`;
export const CompanyDetailList = styled.div`
  display: flex;

  margin-left: 1%;
  margin-bottom: 2%;
  .company-name {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 7%;
  }

  .company-address {
    font-size: 14px;
    color: #61677e;
    font-weight: bold;
  }
`;

export const CompanyDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const CompanyImg = styled.div``;

export const ReviewRegister = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ReviewButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #1d1e5a;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 1px 1px #bfc0c0;
  font-weight: bold;
`;
