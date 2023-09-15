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
  @media screen and (max-width: 410px) {
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
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const DelAndEditContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  img {
    cursor: pointer;
    width: 90%;
    height: 40px;
  }

  @media screen and (max-width: 640px) {
    flex-direction: row;
    column-gap: 5px;
    margin-top: 10px;
  }
`;
