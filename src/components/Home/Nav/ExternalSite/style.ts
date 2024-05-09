import { Flex } from "@src/styles/flex";
import styled from "styled-components";

export const ExternalSiteContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "1rem" })}
`;

export const ExternalSiteTitle = styled.div`
  font-size: 17px;
  font-weight: 600;

  ${Flex({ alignItems: "center", columnGap: "5px" })}

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ExternalSiteItemContainer = styled.div`
  width: 100%;
  padding: 0 1rem 1rem 1rem;
  border: 1px solid #dddddd;
  border-radius: 10px;
  background-color: #fff;
`;

export const ExternalSiteItemWrapper = styled.ul`
  margin-top: 15px;
  ${Flex({ flexDirection: "column", rowGap: "1rem" })}
`;

export const ExternalSiteItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;

  ${Flex({ alignItems: "center", columnGap: "0.7rem" })}

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dddddd;
    object-fit: cover;
  }

  p {
    font-size: 16px;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
    transform: scale(0.97);
  }
  &:active {
    background-color: #dddddd;
    color: #4869f6;
  }
`;
