import styled from "styled-components";
import { SkeletonAnimation } from "../Common/style";

export const UserSkeletonStatus = styled.div`
  width: 45%;
  height: 125px;
  border-radius: 5px;
  @media screen and (max-width: 1355px) {
    width: 80%;
  }
  ${SkeletonAnimation};
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
