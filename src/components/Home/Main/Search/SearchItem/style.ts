import styled from "styled-components";

export const NoneData = styled.div`
  font-size: 18px;

  p {
    span {
      transition: all 0.1s ease-in-out;
      color: rgba(72, 105, 246, 1);
      font-weight: 800;
      cursor: pointer;

      &:hover {
        color: rgba(72, 105, 246, 0.81);
      }
    }
  }
`;
