import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: calc(100% - 290px);
  height: 100%;

  ${Flex({ flexDirection: "column", rowGap: "3rem" })}

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1105px) {
    width: 100%;
  }

  ${FadeInAnimation};
`;

export const MainWrapper = styled.div<{ rowGap: string }>`
  width: 100%;
  height: 100%;

  ${({ rowGap }) => Flex({ flexDirection: "column", rowGap })}
  overflow-y: hidden;
`;

export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 25px;

  ${Flex({ alignItems: "center", columnGap: "10px" })}

  img {
    width: 27px;
    height: 27px;
  }

  p {
    span {
      color: #ec6a5e;
    }
  }
`;

export const MainItemBox = styled.div`
  width: 330px;
  height: 300px;
  border: 1px solid #ddd;

  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 1385px) {
    flex-basis: 47%;
    height: 340px;
  }
  @media screen and (max-width: 1105px) {
    flex-basis: 31%;
    height: 330px;
  }
  @media screen and (max-width: 900px) {
    flex-basis: 48%;
  }
  @media screen and (max-width: 533px) {
    flex-basis: auto;
    width: 100%;
    height: 380px;
  }
`;

export const CompanyLogoContainer = styled.div<{ rgb: string }>`
  width: 100%;
  height: 65%;

  ${Flex({ justifyContent: "center" })}
  border-bottom: 1px solid #ddd;
  overflow: hidden;

  background-color: ${({ rgb }) => rgb || "#fff"};

  @media screen and (max-width: 710px) {
    height: calc(100% - 121px);
  }
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

export const CompanyContentContainer = styled.div`
  width: 100%;
  height: 35%;
  background-color: #fff;

  ${Flex({ flexDirection: "column", justifyContent: "space-between" })}
  padding: 1rem 1rem 0.7rem 1rem;

  @media screen and (max-width: 710px) {
    height: 121px;
    ${Flex({ justifyContent: "normal", rowGap: "1.5rem" })}
  }
`;

export const CompanyNameAndCreatedAt = styled.div`
  font-weight: bold;
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;

export const CompanyName = styled.p`
  color: ${RollingPalette.text.Darkest};
  font-size: 20px;
  font-family: "Pretendard-Bold" !important;
`;

export const CompanyCreatedAt = styled.p`
  font-size: 15px;
  color: ${RollingPalette.unEmphasize.Base};
`;

export const CompanyDescription = styled.p`
  font-size: 17px;
  font-weight: bold;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
`;

export const CompanyAddress = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${RollingPalette.unEmphasize.Dark};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
