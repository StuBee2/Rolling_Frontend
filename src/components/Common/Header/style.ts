import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { HoverAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  font-size: 19px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  zoom: 0.8;

  min-width: 500px;
  white-space: nowrap;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  @media screen and (max-width: 740px) {
    border-bottom: 1px solid #dddddd;
  }

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const HeaderWrapper = styled.div`
  width: 1370px;
  height: 100%;

  ${Flex({
    alignItems: "center",
    columnGap: "10px",
    justifyContent: "space-between",
  })}

  @media screen and (max-width: 1040px) {
    width: 90%;
  }
  @media screen and (min-width: 500px) {
    padding: 0 10px 0 10px;
  }
`;

export const PageContainer = styled.div`
  ${Flex({ gap: "10px", alignItems: "center" })}

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  ul {
    ${Flex({ columnGap: "3px", alignItems: "center" })}
  }
`;

export const PageList = styled.li<{
  isSelect: boolean;
  requiredToken?: boolean;
}>`
  cursor: pointer;
  font-weight: ${({ isSelect }) => isSelect && "bold"};
  height: 45px;
  padding: 10px;

  display: ${({ requiredToken }) => requiredToken && "none"};
  ${Flex({ alignItems: "center", justifyContent: "center", columnGap: "2px" })}

  border-radius: 10px;
  transform: scale(1);
  transition: all 0.1s ease-in-out;

  span {
    color: ${RollingPalette.error.Light};
  }

  ${({ isSelect }) =>
    !isSelect &&
    css`
      &:hover {
        background-color: #eeeeee;
        transform: scale(0.98);
      }
      &:active {
        background-color: #dddddd;
      }
    `};
`;

export const HoverIconContainer = styled.div`
  width: 40px;
  height: 40px;
  ${HoverAnimation};
`;

export const Search = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const UserIcon = styled(AiOutlineUser)`
  cursor: pointer;
`;

export const SignInText = styled.div`
  cursor: pointer;
  width: 65px;
  height: 40px;
  ${HoverAnimation};
`;
