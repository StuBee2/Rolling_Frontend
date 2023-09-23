import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { HoverAnimation } from "@src/styles/common.style";
import styled, { CSSObject } from "styled-components";

export const Header = styled.div<{ customResponsiveHeader?: CSSObject }>`
  width: 100%;
  height: 80px;
  font-size: 19px;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 450px;
  white-space: nowrap;
  ${({ customResponsiveHeader }) => customResponsiveHeader}
`;

export const HeaderWrap = styled.div`
  width: 1370px;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
  @media screen and (min-width: 450px) {
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
    column-gap: 5px;
  }
`;

export const PageList = styled.li<{
  isSelect: boolean;
  requiredToken?: boolean;
}>`
  cursor: pointer;
  font-weight: ${(props) => props.isSelect && "bold"};
  width: 80px;
  height: 45px;
  display: ${(props) => !props.requiredToken && "none"};
  ${HoverAnimation};
`;

export const LoginSearchContainer = styled.div`
  display: flex;
  align-items: center;
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

export const SignInText = styled.p`
  cursor: pointer;
  margin-left: 5px;
  transition: 
  &:hover {
    font-weight: bold;
  }
`;
