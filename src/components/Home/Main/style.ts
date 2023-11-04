import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: calc(100% - 290px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;

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
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => rowGap};
  overflow-y: hidden;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  column-gap: 10px;
  img {
    width: 27px;
    height: 27px;
  }

  p {
    span {
      color: rgba(236, 106, 94, 1);
    }
  }
`;

export const MainItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const MainItemWrapper = styled.div`
  widht: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const MainItemContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
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

  display: flex;
  justify-content: center;
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
  width: auto;
  height: auto;

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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1rem 0.7rem 1rem;

  @media screen and (max-width: 710px) {
    height: 121px;
    justify-content: normal;
    row-gap: 1.5rem;
  }
`;

export const CompanyNameAndCreatedAt = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-weight: bold;
`;

export const CompanyName = styled.p`
  color: #000;
  font-size: 20px;
  font-family: "Pretendard-Bold" !important;
`;

export const CompanyCreatedAt = styled.p`
  font-size: 15px;
  color: rgba(189, 194, 208, 1);
`;

export const CompanyDescriptionAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
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
  color: rgba(115, 123, 152, 1);

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
