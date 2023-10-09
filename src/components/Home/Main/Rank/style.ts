import styled from "styled-components";

export const RankContainer = styled.div`
  width: calc(100% - 290px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1105px) {
    width: 100%;
  }
`;

export const RankWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
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
  column-gap: 15px;
  align-items: center;
  overflow-x: scroll;
  padding-bottom: 10px;
  width: 100%;
  height: 50px;
`;

export const RankCategoryLi = styled.li<{ isSelect: boolean }>`
  height: 40px;
  padding: 0.5rem;
  font-size: 17px;

  font-weight: ${(props) => props.isSelect && "800"};
  color: ${(props) => props.isSelect && "#fff"};
  background-color: ${(props) => props.isSelect && "rgba(72, 105, 246, 1)"};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.isSelect ? "rgba(72, 105, 246, 1)" : "#eeeeee"};
    transform: scale(0.98);
  }
  &:active {
    background-color: ${(props) => (props.isSelect ? "#2b3f94" : "#dddddd")};
  }
`;
