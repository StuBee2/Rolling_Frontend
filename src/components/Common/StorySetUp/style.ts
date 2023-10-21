import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const Icon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const SetUpIconContainer = styled.div`
  width: 30px;
  height: 30px;
  ${HoverAnimation};
`;
