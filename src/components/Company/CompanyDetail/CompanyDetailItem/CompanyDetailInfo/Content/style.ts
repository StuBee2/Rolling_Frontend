import styled from "styled-components";

export const CompanyDetailContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const CompanyDetailContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  div {
    display: flex;
    align-items: center;
    column-gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      margin-top: 5px;
      font-size: 25px;
      font-weight: 700;
    }
  }
`;

export const CompanyDetailContentSubTitle = styled.p`
  color: #737b98;
  font-size: 15px;
  font-weight: 600;
`;

export const CompanyDetailContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-bottom: 20px;
  border-bottom: 3px solid #dee0e6;
`;

export const CompanyDetailContentInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
    object-fit: contain;
    border: 1px solid #dddddd;
    background-color: #fff;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const CompanyName = styled.p`
  color: #090a0a;
  font-size: 25px;
  font-weight: 700;
`;

export const CompanyAddress = styled.p`
  color: #737b98;
  font-size: 15px;
  font-weight: 500;
`;

export const CompanyDetailContentDescription = styled.div`
  display: flex;
  column-gap: 5px;
  line-height: 23px;
  font-size: 16px;
  font-weight: 600;
  img {
    width: 22px;
    height: 22px;
  }
  p {
    width: 100%;
    font-size: 18px;
    max-height: 140px;
    white-space: pre-wrap;
    overflow-y: scroll;
    padding-left: 10px;
  }
`;

export const CompanyDetailContentCompanyImgContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  column-gap: 10px;
  padding-bottom: 15px;
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }
`;
