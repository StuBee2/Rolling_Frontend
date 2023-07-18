import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const ErrorText = styled.div<{ isNumber: boolean }>`
  font-weight: bold;
  font-size: ${(props) => (props.isNumber ? "100px" : "50px")};
`;

export const Gohome = styled.button`
  width: 100%;
  height: 50px;
  color: #ffffff;
  background-color: #1d1e5a;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1f207d;
  }
`;
