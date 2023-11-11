import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const NoneData = styled.div`
  font-size: 18px;

  p {
    span {
      transition: all 0.1s ease-in-out;
      color: ${RollingPalette.main.Base};
      font-weight: 800;
      cursor: pointer;

      &:hover {
        color: rgba(72, 105, 246, 0.81);
      }
    }
  }
`;
