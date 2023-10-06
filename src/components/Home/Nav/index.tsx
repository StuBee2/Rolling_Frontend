import styled from "styled-components";
import ExternalSite from "./ExternalSite";
import UserInfo from "./UserInfo";

export default function Nav() {
  return (
    <NavContainer>
      <UserInfo />
      <ExternalSite />
    </NavContainer>
  );
}

export const NavContainer = styled.div`
  width: 280px;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;
