import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import styled from "styled-components";
import ExternalSite from "./ExternalSite";
import UserInfo from "./UserInfo";
import { Flex } from "@src/styles/flex";

const Nav = () => {
  return (
    <NavContainer>
      {Token.getToken(ACCESS_TOKEN_KEY) && <UserInfo />}
      <ExternalSite />
    </NavContainer>
  );
};

export const NavContainer = styled.div`
  width: 290px;
  height: 100%;

  ${Flex({ flexDirection: "column" })}
  row-gap: calc(2rem - 10px);

  position: sticky;
  top: calc(90px + 2rem);

  @media screen and (max-width: 1105px) {
    display: none;
  }
`;

export default Nav;
