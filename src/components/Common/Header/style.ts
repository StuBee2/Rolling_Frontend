import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { HoverAnimation } from "@src/styles/common.style";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.div<{ pathname: string }>`
  width: 100%;
  height: 90px;
  font-size: 19px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  white-space: nowrap;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  ${({ pathname }) =>
    pathname === "/" &&
    css`
      @media screen and (max-width: 500px) {
        zoom: 1.2;
      }
    `}

  @media screen and (max-width: 740px) {
    border-bottom: 1px solid #dddddd;
  }
`;

export const HeaderWrapper = styled.div`
  width: 1370px;
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;

  @media screen and (max-width: 1040px) {
    width: 90%;
  }
  @media screen and (min-width: 500px) {
    padding: 0 10px 0 10px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    column-gap: 3px;
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
  display: flex;
  align-items: center;
  column-gap: 2px;
  justify-content: center;

  border-radius: 10px;
  transform: scale(1);
  transition: all 0.1s ease-in-out;

  span {
    color: rgb(236, 106, 94);
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

export const LoginSearchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
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
