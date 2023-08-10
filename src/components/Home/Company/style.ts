import styled from "styled-components";

export const CompanyContainer = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 25px;
  font-weight: bold;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    span {
      color: #ec6a5e;
    }
  }
`;
