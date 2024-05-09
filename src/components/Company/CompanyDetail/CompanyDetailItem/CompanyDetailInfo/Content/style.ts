import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;

export const BasicInfo = styled.p`
  margin-top: 5px;
  font-size: 25px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  color: ${RollingPalette.unEmphasize.Dark};
  font-size: 15px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  ${Flex({ flexDirection: "column", rowGap: "15px" })}
  border-bottom: 3px solid ${RollingPalette.unEmphasize.Light};
`;

export const Info = styled.div<{ backgroundColor: string }>`
  width: 100%;
  ${Flex({ alignItems: "center", columnGap: "15px" })}
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
    object-fit: contain;
    border: 1px solid #dddddd;
    background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
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
  width: 100%;
  line-height: 25px;
  font-size: 16px;
  font-weight: 600;

  ${Flex({ columnGap: "5px" })}

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
  overflow-x: auto;
  padding-bottom: 15px;
  ${Flex({ columnGap: "10px" })}
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }
`;
