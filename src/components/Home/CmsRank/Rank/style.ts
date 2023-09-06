import styled from "styled-components";

export const RankContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
  column-gap: 20px;
  font-size: 15px;
  overflow-x: scroll;
`;

export const RankCategoryLi = styled.li<{ isSelect: boolean }>`
  font-weight: ${(props) => props.isSelect && "bold"};
  border-bottom: ${(props) => props.isSelect && "2px solid #1d1e5a"};
  padding-bottom: ${(props) => props.isSelect && "3px"};
  font-size: 15px;
  color: ${(props) => props.isSelect && "#1d1e5a"};
  cursor: pointer;
`;
