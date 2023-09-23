import styled from "styled-components";

export const StarContainer = styled.div<{ fontSize?: string }>`
  width: 100%;
  height: 100%;
  background-color: rgba(242, 244, 245, 1);
  border-radius: 10px;
  font-size: ${({ fontSize }) => fontSize};
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  padding: 2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    p {
      text-align: center;
    }
  }
`;
