import styled from "styled-components";

export const ModalWrap = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${(props) => props.background};
  z-index: 3;
`;
