import styled from "styled-components";

export const NavFooterContainer = styled.div`
  display: none;
  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const NavFooterWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NavFooterCategoryItem = styled.li<{ isSelect: boolean }>`
  color: ${({ isSelect }) => (isSelect ? "#1d1e5a" : "#61677e")};
  white-space: nowrap;
  font-weight: ${({ isSelect }) => isSelect && "800"};
  padding-bottom: 10px;
  cursor: pointer;
`;
