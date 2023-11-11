import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const RankCategoryTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: ${RollingPalette.unEmphasize.Dark};

  display: flex;
  align-items: center;
  column-gap: 5px;

  img {
    width: 24px;
    headers: 24px;
  }
`;

export const RankNumber = styled.div`
  width: 40px;
  height: 40px;

  background-color: ${RollingPalette.main.Dark};
  border-radius: 10px 0 10px 0;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  color: #fff;
  z-index: 2;
`;
