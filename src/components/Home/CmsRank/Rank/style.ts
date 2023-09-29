import styled from "styled-components";

export const RankContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  padding-bottom: 10px;
`;

export const RankCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const RankTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  column-gap: 5px;
  img {
    width: 27px;
    height: 27px;
  }
  p {
    span {
      color: rgba(236, 106, 94, 1);
    }
  }
`;

export const RankCategoriesUl = styled.ul`
  display: flex;
  column-gap: 12px;
  overflow-x: scroll;
  padding: 20px 0 20px 0;
`;

export const RankCategoryLi = styled.li<{ isSelect: boolean }>`
  font-weight: ${(props) => props.isSelect && "bold"};
  border-bottom: ${(props) => props.isSelect && "2px solid #1d1e5a"};
  padding-bottom: ${(props) => props.isSelect && "3px"};
  font-size: 14.4px;
  color: ${(props) => props.isSelect && "#1d1e5a"};
  cursor: pointer;
  &:hover {
    color: #1d1e5a;
    font-weight: bold;
  }
`;
