import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 1090px;
  height: calc(100% - 75px);

  position: absolute;
  bottom: 0;

  @media screen and (max-width: 1105px) {
    width: 100%;
  }
`;

export const MyInfoBox = styled.div`
  width: 272px;
  height: 181px;
  background-color: ${RollingPalette.text.Dark};
  z-index: 3;
  border-radius: 15px;
  position: absolute;
  top: 0;
  right: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 52%;

  border-radius: 15px 15px 0 0;
  border-bottom: 2px solid rgba(222, 224, 230, 0.3);

  padding-left: 20px;

  img {
    width: 51px;
    height: 51px;
    border-radius: 10px;
  }

  ${Flex({ alignItems: "center", columnGap: "10px" })}
`;

export const Name = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

export const GitInfo = styled.div`
  color: ${RollingPalette.main.Base};
  cursor: pointer;

  ${Flex({ columnGap: "5px", alignItems: "center" })}

  font-size: 14px;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const MyPageLogout = styled.div`
  width: 100%;
  height: 48%;

  border-radius: 0 0 15px 15px;
  color: #ffffff;
  font-size: 14px;
  padding-left: 20px;

  ${Flex({ flexDirection: "column", justifyContent: "center", rowGap: "13px" })}

  div {
    ${Flex({ columnGap: "7px", alignItems: "center" })}
    cursor: pointer;

    img {
      width: 17px;
      height: 17px;
    }
  }
`;
