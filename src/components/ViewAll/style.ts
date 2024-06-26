import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const ViewAllContainer = styled.div<{ rowGap: string }>`
  width: 100%;
  height: 100%;
  zoom: 0.8;
  padding-top: 90px;

  ${({ rowGap }) =>
    Flex({
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      rowGap,
    })}

  background-color: #f9fafb;
  min-width: 500px;
`;

export const ViewAllWrapper = styled.div`
  width: 1200px;
  height: 100%;
  padding: 3rem 5px 2rem 5px;

  ${Flex({ flexDirection: "column", rowGap: "5rem" })}

  @media screen and (max-width: 985px) {
    width: 785px;
  }
  @media screen and (max-width: 645px) {
    width: 580px;
  }
  @media screen and (max-width: 500px) {
    width: 490px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;

  span {
    font-size: 13px;
    margin-left: 10px;
    color: ${RollingPalette.unEmphasize.Dark};
  }
`;

export const SubTitle = styled.p`
  color: ${RollingPalette.unEmphasize.Dark};
  font-size: 17px;
  font-weight: 600;

  line-height: 25px;

  span {
    color: ${RollingPalette.main.Base};
  }
`;

export const CompanyLogoContainer = styled.div<{ rgb: string }>`
  width: 100%;
  height: 60%;
  border-radius: 10px;

  //회사 랭킹 숫자 보여주기 위해서 사용함
  position: relative;

  ${Flex({ justifyContent: "center" })}
  border-bottom: 1px solid #ddd;

  background-color: ${({ rgb }) => rgb || "#fff"};
  overflow: hidden;

  border: 1px solid #ddd;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;

  transform: scale(1);
  transition: all 0.27s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export const CompanyContent = styled.div`
  width: 100%;
  height: 40%;

  ${Flex({ flexDirection: "column", rowGap: "1rem" })}
  padding: 1rem 1rem 0.7rem 0.3rem;
`;
