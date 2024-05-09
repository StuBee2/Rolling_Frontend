import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100%;

  position: fixed;
  top: calc(90px + 2rem);

  @media screen and (max-width: 1005px) {
    width: 100%;
    height: 200px;
    white-space: nowrap;
    position: static;
  }
`;

export const Wrapper = styled.div`
  ${Flex({ flexDirection: "column", alignItems: "center", rowGap: "1.5rem" })}

  @media screen and (max-width: 1005px) {
    ${Flex({
      flexDirection: "row",
      justifyContent: "center",
      rowGap: "0",
      columnGap: "15px",
    })}
    white-space: nowrap;
  }
`;

export const CompanyBasicInfo = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 150px;

  ${Flex({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "15px",
  })}

  margin-bottom: 8px;

  img {
    object-fit: contain;
    width: 110px;
    height: 110px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  }

  p {
    font-size: 23px;
    font-weight: bold;
  }

  @media screen and (max-width: 1005px) {
    width: auto;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${RollingPalette.unEmphasize.Lightest};
  border: 1px solid #dddddd;
  padding: 1.5rem 1rem;

  ${Flex({ flexDirection: "column", rowGap: "1rem" })}

  @media screen and (max-width: 1005px) {
    overflow: hidden;
    height: 90%;
    padding: 1rem;
  }
`;

export const ItemUl = styled.ul`
  ${Flex({ flexDirection: "column", justifyContent: "space-between" })}
  row-gap: 1.5rem;
  padding: 1rem 2rem;

  li {
    ${Flex({ flexDirection: "column", rowGap: "10px" })}
  }
  @media screen and (max-width: 1005px) {
    padding: 1rem;
    overflow-x: auto;
    overflow-y: auto;
    ${Flex({ flexDirection: "row", rowGap: "0", columnGap: "20px" })}
  }
`;

export const Image = styled.img`
  width: 22px;
  height: 22px;
`;

export const Grade = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const StarGradeContainer = styled.div`
  ${Flex({ alignItems: "center" })}
  @media screen and (max-width: 1005px) {
    ${Flex({ alignItems: "normal", justifyContent: "center" })}
  }
`;

export const StarGradeTitle = styled.p`
  font-size: 15px;
  &:after {
    content: "·";
    margin-left: 5px;
  }
`;

export const StarGradeScore = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin-left: 5px;
`;
