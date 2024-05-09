import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const CompanyStoryText = styled.p`
  font-size: 24px;
  font-family: "Pretendard-Bold" !important;

  span {
    color: ${RollingPalette.main.Base};
    font-family: "Pretendard-Bold" !important;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  background-color: #fff;
  border-radius: 15px;

  border: 1px solid #ddd;
  overflow: hidden;

  padding: 4.5rem 4rem 3rem 4rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  ${Flex({ flexDirection: "column", rowGap: "3rem" })}
`;

export const InputContainer = styled.div`
  width: 50%;
  ${Flex({ flexDirection: "column", rowGap: "10px" })}
  position: relative;
`;

export const InputStyle = {
  width: "100%",
  height: "60px",
  paddingLeft: "20px",
  fontSize: "17px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,
};

export const StarGradeContainer = styled.div`
  width: 100%;
  background-color: rgba(247, 249, 250, 1);
  border: 1px solid #bdc2d0;
  border-radius: 5px;
`;

export const TextAreaStyle = {
  width: "100%",
  height: "230px",
  padding: "20px",
  fontSize: "17px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,
  lineHeight: "25px",
};
