import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const Title = styled.div`
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

export const SubTitle = styled.p`
  color: ${RollingPalette.unEmphasize.Dark};
  font-size: 15px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-bottom: 20px;
  border-bottom: 3px solid ${RollingPalette.unEmphasize.Light};
`;

export const Info = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  column-gap: 15px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
    object-fit: contain;
    border: 1px solid #dddddd;
    background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const CompanyName = styled.p`
  color: #090a0a;
  font-size: 25px;
  font-weight: 700;
`;

export const CompanyAddress = styled.p`
  color: ${RollingPalette.unEmphasize.Dark};
  font-size: 15px;
  font-weight: 500;
`;

export const Description = styled.div`
  display: flex;
  column-gap: 5px;
  line-height: 25px;
  font-size: 16px;
  font-weight: 600;
  img {
    width: 22px;
    height: 22px;
  }
  p {
    width: 100%;
    font-size: 18px;
    max-height: 200px;
    white-space: pre-wrap;
    overflow-y: auto;
    padding-left: 10px;
  }
`;

export const CompanyImgContainer = styled.div`
  display: flex;
  overflow-x: auto;
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
