import styled from "styled-components";

export const CompanyStatusContainer = styled.div`
  width: 312px;
  height: 125px;
  background-color: rgba(72, 105, 246, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  column-gap: 20px;
  white-space: nowrap;
  padding-left: 1.5rem;
  img {
    width: 45px;
    height: 45px;
  }
  div {
    color: rgba(247, 249, 250, 1);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const WriteText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const UpdateAtListCount = styled.p`
  font-size: 14px;
`;

export const CompanyAndWriteText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const DelAndEditContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-left: 10px;
  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 640px) {
    flex-direction: row;
    column-gap: 5px;
  }
`;
