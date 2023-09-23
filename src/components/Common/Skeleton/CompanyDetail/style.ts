import styled from "styled-components";
import { SkeletonAnimation } from "../Common/style";

export const CompanySkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1005px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const CompanySkeletonStarGrade = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;

  @media screen and (max-width: 1005px) {
    width: 100%;
    height: 200px;
    flex-direction: row;
    row-gap: 0;
    column-gap: 3rem;
  }
`;

export const CompanyStarGradeSkeleton = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  ${SkeletonAnimation};
  @media screen and (max-width: 1005px) {
    height: 160px;
  }
`;

export const CompanySkeletonContent = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding-left: 5rem;
  @media screen and (max-width: 1005px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Button = styled.div`
  widht: 100%;
  display: flex;
  justify-content: flex-end;
`;
