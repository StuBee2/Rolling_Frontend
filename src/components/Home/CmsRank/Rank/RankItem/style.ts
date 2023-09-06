import styled from "styled-components";

export const RankItemContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RankCategoryIntroduce = styled.div`
  margin: 3px 0 10px 0;
  font-size: 17px;
  font-weight: bold;
  color: rgba(115, 123, 152, 1);
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const RankItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  position: relative;
`;

export const RankItemBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  display: flex;
`;

export const RankingNumber = styled.div`
  width: 15%;
  height: 100%;
  background-color: rgba(29, 30, 90, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const RankingContentContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  column-gap: 10px;
  background-color: #fff;

  img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 10px;
    background-color: #d9d9d9;
  }
`;

export const RankingCompanyName = styled.p`
  display: flex;
  column-gap: 10px;
  font-weight: bold;
  font-size: 17px;
`;

export const RankingCompanyDescription = styled.p`
  font-size: 13px;
`;
