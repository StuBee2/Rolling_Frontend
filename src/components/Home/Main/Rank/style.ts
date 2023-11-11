import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const RankCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const RankCategoriesUl = styled.ul`
  display: flex;
  column-gap: 15px;
  align-items: center;

  overflow-x: hidden;
  overflow-y: hidden;

  padding: 20px 0 40px 0;
  width: 100%;
  height: 40px;

  @media screen and (max-width: 595px) {
    overflow-x: auto;
  }
`;

export const RankCategoryLi = styled.li<{ isSelect: boolean }>`
  height: 40px;
  padding: 0.5rem;
  font-size: 17px;

  font-weight: ${({ isSelect }) => isSelect && "800"};
  color: ${({ isSelect }) => isSelect && "#fff"};
  background-color: ${({ isSelect }) => isSelect && RollingPalette.main.Base};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ isSelect }) =>
      isSelect ? "rgba(72, 105, 246, 1)" : "#eeeeee"};
    transform: scale(0.98);
  }
  &:active {
    background-color: ${({ isSelect }) => (isSelect ? "#2b3f94" : "#dddddd")};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  column-gap: 3px;
`;
