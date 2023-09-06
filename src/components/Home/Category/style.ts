import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export const InterestCategoryBox = styled.div`
  width: 100%;
  height: 55px;
  background-color: rgba(29, 30, 90, 1);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    column-gap: 5px;
    img {
      width: 25px;
      height: 25px;
    }
  }

  img {
    width: 25px;
    height: 6px;
  }
`;

export const CompanyCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 17px;
  color: rgba(115, 123, 152, 1);
  row-gap: 25px;
  padding: 1rem 2rem;
  li {
    cursor: pointer;
  }
`;

export const FieldCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 22px;
  row-gap: 25px;

  li {
    display: flex;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;

    img {
      width: 25px;
      height: 30px;
    }
    p {
      margin-top: 5px;
    }
  }
`;
