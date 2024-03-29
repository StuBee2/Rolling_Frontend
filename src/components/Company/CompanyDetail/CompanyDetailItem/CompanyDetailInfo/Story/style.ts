import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const StoryTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const StoryCount = styled.p`
  color: ${RollingPalette.main.Base};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
