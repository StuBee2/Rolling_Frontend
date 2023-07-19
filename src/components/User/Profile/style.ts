import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1025px) {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  width: 90%;
`;

export const Explain = styled.div`
  font-size: 15px;
  white-space: nowrap;
  color: #61677e;
  margin-top: 10px;

  @media screen and (max-width: 520px) {
    font-size: 11px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;