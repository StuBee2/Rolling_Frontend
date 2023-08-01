import styled from "styled-components";

export const RankListTextContainer = styled.ul`
  display: flex;
  column-gap: 20px;
  color: #1d1e5a;
  font-size: 15px;
`;

export const RankWrapper = styled.div`
  width: 95%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const RankListText = styled.li<{ isselect: boolean }>`
  font-weight: ${(props) => props.isselect && "bold"};
  border-bottom: ${(props) => props.isselect && "2px solid #1d1e5a"};
  padding-bottom: ${(props) => props.isselect && "3px"};
  cursor: pointer;
`;

export const RankListItemWrapper = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Introduce = styled.div`
  color: #737b98;
  font-weight: bold;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-bottom: 10px;
`;

export const RankListItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const More = styled.p`
  color: #737b98;
  font-weight: bold;
  cursor: pointer;
  text-align: right;
  padding-right: 20px;
`;
