import styled from "styled-components";

export const UserSkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const UserInfoSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;
