import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 270px;
  min-width: 500px;
  border-top: 1px solid #dddddd;
  background-color: #f9fafb;

  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (max-width: 1385px) {
    width: 1105px;
  }

  @media screen and (max-width: 1165px) {
    width: 90%;
  }
  @media screen and (max-width: 920px) {
    padding: 2rem 0 0 1rem;
  }
`;

export const Introduce = styled.p`
  font-size: 14px;
`;

export const LogoAndFooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: normal;
    row-gap: 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (max-width: 920px) {
    padding-left: 0.7rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
  }
  p {
    font-size: 23px;
    font-weight: 800;
  }
`;

export const FooterItemContainer = styled.ul`
  display: flex;
  column-gap: 0.5rem;
  font-weight: 700;

  li {
    width: auto;
    padding: 1rem;
    height: 40px;
    cursor: pointer;
    ${HoverAnimation};
  }
`;

export const EtcContainer = styled.div`
  font-size: 14px;
  color: #8a8a8a;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 920px) {
    padding-left: 1rem;
  }
`;

export const MemberItemContainer = styled.div`
  display: flex;
  column-gap: 5px;

  p {
    &:after {
      content: " |";
      color: #ddd;
    }
  }
`;

export const MemberItemUl = styled.ul`
  display: flex;
  column-gap: 7px;

  li {
    cursor: pointer;
  }
`;
