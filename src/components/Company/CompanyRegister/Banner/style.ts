import { StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;

  position: absolute;
  top: 0;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 280px;
  background-color: rgba(72, 105, 246, 1);

  display: flex;
  justify-content: center;
  color: rgba(247, 249, 250, 1);
  position: relative;
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  margin-top: 3rem;
`;

export const BannerTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const BannerSubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export const MiddleBannerIcon = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 238px;
  height: 236px;
  ${StopDrag};
`;

export const SmallBannerIcon1 = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  bottom: 0;
  left: 12%;
  ${StopDrag};
`;

export const BigBannerIcon1 = styled.img`
  position: absolute;
  width: 400px;
  height: 287px;
  bottom: 17%;
  left: 13%;
  ${StopDrag};

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const SmallBannerIcon2 = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  right: 25%;
  top: 20%;
  ${StopDrag};
`;

export const BigBannerIcon2 = styled.img`
  position: absolute;
  width: 343px;
  height: 285px;
  right: 5%;
  top: 3rem;
  ${StopDrag};
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
