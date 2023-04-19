import styled from "styled-components";

export const ErrorText = styled.div<{ isNumber: boolean }>`
  font-weight: bold;
  font-size: ${(props) => (props.isNumber ? "100px" : "50px")};
`;
