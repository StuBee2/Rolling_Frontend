import styled, { css } from "styled-components";
import { HoverAnimation } from "@src/styles/common.style";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import { Flex } from "@src/styles/flex";

export const Wrapper = styled.div`
  width: 100%;

  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 20px;

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Content = styled.form`
  width: 93%;
  height: 100%;
  padding: 2rem 0 2.5rem 0;

  ${Flex({
    flexDirection: "column",
    rowGap: "1.5rem",
    justifyContent: "space-between",
  })}
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);

  ${Flex({
    flexDirection: "column",
    rowGap: "1rem",
    alignItems: "center",
    columnGap: "2rem",
  })}
`;

export const RegisteredDate = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${RollingPalette.unEmphasize.Dark};
`;

export const DelAndEditContainer = styled.div`
  ${Flex({ alignItems: "center", columnGap: "5px" })}
  margin-left: 10px;
  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const SetUpIconContainer = styled.div`
  width: 30px;
  height: 30px;
  ${HoverAnimation};
`;

export const CompanyContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);

  ${Flex({
    flexDirection: "column",
    rowGap: "1rem",
    alignItems: "center",
    columnGap: "2rem",
  })}
`;

export const StoryModifySubmitBtn = styled.button<{ isRequired: boolean }>`
  color: #f9fafb;
  font-size: 15px;

  width: 130px;
  height: 50px;
  border-radius: 7px;
  border: none;
  background-color: rgba(72, 105, 246, 0.58);

  transition: all 0.2s ease-in-out;

  ${({ isRequired }) =>
    isRequired &&
    css`
      cursor: pointer;
      background-color: ${RollingPalette.main.Base};
      transform: scale(1);
      &:active {
        background-color: rgba(72, 105, 246, 0.81);
        transform: scale(0.99);
      }
    `}
`;
