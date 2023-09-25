import styled from "styled-components";

export const CompanyStarGradesContainer = styled.div`
  width: 250px;
  height: 100%;
  position: sticky;
  top: 0;
  @media screen and (max-width: 1005px) {
    width: 95%;
    height: 200px;
    white-space: nowrap;
    position: static;
  }
`;

export const CompanyStarGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;
  @media screen and (max-width: 1005px) {
    flex-direction: row;
    justify-content: center;
    row-gap: 0;
    column-gap: 15px;
    white-space: nowrap;
  }
`;

export const CompanyBasicInfo = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 8px;

  img {
    object-fit: cover;
    width: 110px;
    height: 110px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    background-color: #fff;
  }

  p {
    font-size: 23px;
    font-weight: bold;
  }
  @media screen and (max-width: 1005px) {
    width: auto;
  }
`;

export const CompanyStarGradesItemContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #f7f9fa;
  border: 1px solid #dddddd;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (max-width: 1005px) {
    overflow: hidden;
    height: 90%;
    padding: 1rem;
  }
`;

export const CompanyStarGradesItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.5rem;
  padding: 1rem 1.5rem;

  li {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  @media screen and (max-width: 1005px) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 20px;
    padding-bottom: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const CompanyGradeText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  img {
    width: 22px;
    height: 22px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StarGradeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const StarGradeText = styled.p`
  font-size: 15px;
`;

export const StarGradeScoreText = styled.p`
  font-size: 17px;
  font-weight: bold;
`;
