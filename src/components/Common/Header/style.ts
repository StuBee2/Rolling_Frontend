import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 108px;
  font-size: 19px;
  background-color: #f9fafb;

  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const HeaderWrap = styled.div`
  width: 1370px;
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: space-between;

  overflow-x: scroll;
  padding: 0 10px 0 10px;
  @media screen and (max-width: 1040px) {
    width: 90%;
  }
  @media screen and (min-width: 430px) {
    ::-webkit-scrollbar {
      display: none;
    }
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
