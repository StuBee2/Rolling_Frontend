import { HoverAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 290px;
  min-width: 500px;
  border-top: 1px solid #dddddd;
  background-color: #fff;

  ${Flex({ justifyContent: "center" })}
`;

export const FooterWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;

  @media screen and (max-width: 1385px) {
    width: 1105px;
  }

  @media screen and (max-width: 1165px) {
    width: 90%;
  }

  @media screen and (max-width: 920px) {
    padding: 2rem 0 0 1rem;
  }

  ${Flex({ flexDirection: "column", rowGap: "1.5rem" })}
`;

export const Introduce = styled.p`
  font-size: 14px;
`;

export const LogoAndFooterItem = styled.div`
  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: normal;
    row-gap: 1.5rem;
  }
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const LogoContainer = styled.div`
  @media screen and (max-width: 920px) {
    padding-left: 0.7rem;
  }
  ${Flex({ flexDirection: "column", rowGap: "1rem" })}
`;

export const LogoWrapper = styled.div`
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
  }
  p {
    font-size: 23px;
    font-weight: 800;
  }
  ${Flex({ alignItems: "center", columnGap: "8px" })}
`;

export const FooterItemContainer = styled.ul`
  font-weight: 700;
  li {
    width: auto;
    padding: 1rem;
    height: 40px;
    cursor: pointer;
    ${HoverAnimation};
  }
  ${Flex({ columnGap: "0.5rem" })}
`;

export const EtcContainer = styled.div`
  font-size: 14px;
  color: ${RollingPalette.unEmphasize.Dark};
  @media screen and (max-width: 920px) {
    padding-left: 1rem;
  }
  ${Flex({ flexDirection: "column", rowGap: "10px" })}
`;

export const TeamStubee = styled.p`
  &:after {
    content: " |";
    color: #ddd;
  }
`;

export const MemberItemUl = styled.ul`
  ${Flex({ columnGap: "7px" })}

  li {
    cursor: pointer;
  }
`;
