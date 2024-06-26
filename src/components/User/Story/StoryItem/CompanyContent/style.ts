import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 300px);

  ${Flex({ flexDirection: "column", rowGap: "2.5rem" })}
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  ${Flex({ alignItems: "center", columnGap: "10px" })}
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;

export const Text = styled.p`
  font-family: "Pretendard-Bold" !important;
  font-size: 23px;
`;

export const Content = styled.p<{ isEtc?: string }>`
  width: 100%;
  height: ${({ isEtc }) => (isEtc === "etc" ? "500px" : "auto")};
  max-height: 200px;
  overflow-y: hidden;
  overflow-x: hidden;

  font-size: 18px;
  color: ${RollingPalette.unEmphasize.Dark};
  border-radius: 5px;
  background-color: ${RollingPalette.unEmphasize.Lighter};

  white-space: pre-wrap;
  padding: 0.8rem;
  line-height: 23px;

  &:hover {
    overflow-y: auto;
  }
`;

export const AdvantagesAndDisAdvantages = styled.div`
  width: 100%;
  ${Flex({ columnGap: "20px" })}

  @media screen and (max-width: 560px) {
    flex-direction: column;
    column-gap: 0px;
    row-gap: 1.5rem;
  }
`;

export const ProsAndCons = styled.div`
  width: 50%;
  height: 100%;

  ${Flex({ flexDirection: "column", rowGap: "10px" })}

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const ProsAndConsContent = styled.p<{ isPros?: boolean }>`
  width: 100%;

  background-color: ${({ isPros }) => (isPros ? "#eef2fa" : "#fbeeee")};
  border-radius: 10px;

  padding: 0.8rem;
  color: rgba(115, 123, 152, 1);
  line-height: 23px;

  font-size: 17px;
`;

export const InputStyle = {
  width: "100%",
  border: `1px solid ${RollingPalette.unEmphasize.Base}`,
  borderRadius: "5px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,
  outlineColor: "blue",
  padding: "0.8rem",
  color: `${RollingPalette.text.Darkest};`,
  lineHeight: "23px",
  fontSize: "17px",
};

export const TextAreaStyle = {
  width: "100%",
  height: "500px",
  maxHeight: "200px",
  OverflowY: "auto",
  OverflowX: "hidden",

  fontSize: "17px",
  color: `${RollingPalette.text.Darkest};`,
  borderRadius: "5px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,

  WhiteSpace: "pre-wrap",
  padding: "0.8rem",
  lineHeight: "25px",
};

export const ModifyContentInput = styled.input`
  width: 100%;
  max-height: 200px;
  overflow-y: hidden;
  overflow-x: hidden;

  font-size: 15px;
  color: rgba(115, 123, 152, 1);
  border: 1.5px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  outline-color: blue;

  white-space: pre-wrap;
  padding: 0.8rem;
  line-height: 23px;
  &:hover {
    overflow-y: auto;
  }
`;

export const ModifyContentTextArea = styled.textarea<{ isEtc?: string }>`
  width: 100%;
  height: ${({ isEtc }) => (isEtc === "etc" ? "500px" : "auto")};
  max-height: 200px;
  overflow-y: hidden;
  overflow-x: hidden;

  font-size: 15px;
  color: rgba(115, 123, 152, 1);
  border: 1.5px solid #ddd;
  border-radius: 5px;
  background-color: white;
  outline-color: blue;

  white-space: pre-wrap;
  padding: 0.8rem;
  line-height: 23px;
  resize: none;

  &:hover {
    overflow-y: auto;
  }
`;
