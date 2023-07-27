import styled from "styled-components";

export const NavContainer = styled.div`
  width: 320px;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const InterestCategoryBox = styled.div`
  width: 100%;
  height: 60px;
  color: #fff;

  padding: 0 20px 0 20px;
  background-color: #1d1e5a;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 22px;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    column-gap: 10px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CompanyCategoryListContainer = styled.ul`
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  font-size: 18px;
  font-weight: bold;
  color: #737b98;

  li {
    cursor: pointer;
  }
`;

export const FieldCategoryListContainer = styled.ul`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 25px;

  li {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }
`;
