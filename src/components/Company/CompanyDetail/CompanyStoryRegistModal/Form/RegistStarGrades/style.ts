import styled from "styled-components";

export const StarGradeUl = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  column-gap: 20px;
  justify-content: space-between;

  li {
    color: rgba(115, 123, 152, 1);
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    p {
      text-align: center;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
`;
