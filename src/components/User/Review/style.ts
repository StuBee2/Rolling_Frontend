import styled from "styled-components";
import { CompanyStatusCommonHover } from "../style";

export const ReviewContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CompanyStatusContainer = styled.div`
  width: 312px;
  height: 125px;
  background-color: rgba(72, 105, 246, 1);
  border-radius: 10px;
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
  ${CompanyStatusCommonHover}
  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 140px;
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
