import styled from "styled-components";

export const HomeSkeletonContainer = styled.div`
  width: 335px;
  height: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 740px) {
    width: 500px;
    height: 555px;
  }
  @media screen and (max-width: 500px) {
    width: 335px;
    height: 380px;
  }
`;
