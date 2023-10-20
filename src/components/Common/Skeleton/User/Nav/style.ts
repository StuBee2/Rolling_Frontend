import styled from "styled-components";
import { SkeletonAnimation } from "../../Common/style";

export const NavProfileLogoSkeleton = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  ${SkeletonAnimation}
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2.5rem;
`;

export const UserNameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;
