import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const UserInfoBox = styled.div`
  width: 100%;
  white-space: nowrap;
  ${Flex({ alignItems: "center", columnGap: "10px" })};

  img {
    width: 75px;
    height: 75px;
    border: 1px solid #d9d9d9;
    object-fit: cover;
    border-radius: 4rem;
  }

  div {
    width: calc(100% - 85px);
    cursor: pointer;
    ${Flex({ flexDirection: "column", rowGap: "8px" })}
  }
`;

export const UserInfoNickName = styled.p`
  height: 20px;
  font-size: 18px;

  font-weight: 600;
  overflow-x: hidden;
  text-overflow: ellipsis;

  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${RollingPalette.main.Base};
  }
`;

export const UserInfoEmail = styled.p`
  font-size: 15px;
`;

export const RegistTextContainer = styled.div`
  width: 100%;

  margin-bottom: 15px;
  font-weight: 600;

  ${Flex({ alignItems: "center", columnGap: "5px" })}

  img {
    width: 20px;
    height: 20px;
  }
`;

export const CompanyRegistBtn = styled.button`
  width: 100%;
  height: 57px;

  outline: none;
  background-color: #fff;
  border-radius: 5px;
  font-size: 15px;

  color: ${RollingPalette.main.Base};
  border: 2px solid ${RollingPalette.main.Base};
  cursor: pointer;

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(247, 249, 250, 1);
    transform: scale(0.985);
  }
`;
