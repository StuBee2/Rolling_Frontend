import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

export const NavProfileLogoSkeleton = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  ${skeletonAnimation}
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
