import styled from "styled-components";

export const StarContainer = styled.div<{ fontSize?: string }>`
  width: 100%;
  height: 140px;

  background-color: rgba(242, 244, 245, 1);
  border-radius: 10px;
  font-size: ${({ fontSize }) => fontSize};

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5rem;

  padding: 0 3rem 0 3rem;
  white-space: nowrap;
  background-color: red;

  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f2f4f5;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      overflow-x: scroll;
    }
  }
`;

export const StarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const StarItemTitle = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5px;
`;

export const StarGradeText = styled.p`
  font-weight: 800;
`;

export const StarRatingContainer = styled.p`
  text-align: center;
`;
