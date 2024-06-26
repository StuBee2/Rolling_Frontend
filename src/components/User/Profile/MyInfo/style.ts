import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 260px;

  background-color: #f3f4f5;
  border-radius: 15px;
  border: 1px solid #dddddd;
  padding: 20px;

  ${Flex({ flexDirection: "column", rowGap: "10px" })}

  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;

  ${Flex({ flexDirection: "column", rowGap: "15px" })}
`;

export const TextContainer = styled.div`
  font-size: 22px;
  width: 100%;
  height: 20px;
  margin-bottom: 18px;
`;

export const SetUpNickNameText = styled.p`
  font-size: 13px;
  margin-bottom: 2px;
  color: ${RollingPalette.error.Base};
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 2.5px solid rgba(189, 194, 208, 1);

  ${Flex({ alignItems: "center", columnGap: "20px" })}
  white-space: nowrap;
  overflow-x: auto;

  img {
    width: 85px;
    height: 85px;
    border-radius: 4rem;
    object-fit: cover;
    border: 1px solid #ddd;
  }
`;

export const MyGitInfoLoginTypeText = styled.p`
  color: ${RollingPalette.unEmphasize.Dark};
  margin-top: 5px;
  font-size: 14px;
`;

export const MyGitInfoContainer = styled.div`
  width: 100%;
  height: 45px;
  div {
    ${Flex({ alignItems: "center", columnGap: "5px" })}
    font-weight: 400;
    cursor: pointer;
  }
`;
