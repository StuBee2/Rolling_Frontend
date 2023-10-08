import styled from "styled-components";

export const StarGradeUl = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    color: rgba(115, 123, 152, 1);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const StarRatingItemContainer = styled.div`
  display: flex;
`;
