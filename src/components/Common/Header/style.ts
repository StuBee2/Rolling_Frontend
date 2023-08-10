import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 108px;
  font-size: 19px;
  background-color: #f9fafb;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeaderWrap = styled.div`
  width: 1570px;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: space-between;

  white-space: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1620px) {
    width: 1270px;
  }
  @media screen and (max-width: 1355px) {
    width: 1000px;
  }
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

export const PageList = styled.li<{ isSelect: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => props.isSelect && "bold"};
`;

export const LoginSearchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  div {
    cursor: pointer;
  }
`;

export const Search = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const UserIcon = styled(AiOutlineUser)`
  cursor: pointer;
  position: relative;
`;
