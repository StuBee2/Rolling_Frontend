import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const RankCategoryTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: ${RollingPalette.unEmphasize.Dark};

  ${Flex({ columnGap: "5px", alignItems: "center" })}

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MainItemWrap = styled.div`
  width: 100%;
  height: 100%;
  ${Flex({ flexWrap: "wrap", gap: "1.5rem" })}
`;

export const RankNumber = styled.div`
  width: 40px;
  height: 40px;

  background-color: ${RollingPalette.main.Dark};
  border-radius: 10px 0 10px 0;
  position: absolute;
  top: 0;
  left: 0;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  font-size: 20px;
  color: #fff;
  z-index: 2;
`;
