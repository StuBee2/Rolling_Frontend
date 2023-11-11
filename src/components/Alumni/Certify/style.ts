import { FadeInAnimation } from "@src/styles/common.style";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  zoom: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 20px 2rem 20px;

  min-width: 500px;

  @media screen and (max-width: 500px) {
    background-color: transparent;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 2rem;

  border-bottom: 1px solid #ddd;
`;

export const Title = styled.p`
  font-size: 30px;
  font-family: "Pretendard-Bold" !important;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: ${RollingPalette.unEmphasize.Dark};
`;

export const Content = styled.div`
  width: 100%;
`;

export const CertificationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1.3px solid #ddd;

  border-radius: 20px;

  width: 100%;
  height: 600px;

  background-color: #fff;
  padding: 0 4rem 0 4rem;

  @media screen and (max-width: 750px) {
    padding: 0 2rem 0 2rem;
  }
  @media screen and (max-width: 500px) {
    border: 1px solid #ddd;
  }

  ${FadeInAnimation};
`;

export const CertifyText = styled.div`
  margin-bottom: 38px;
  font-size: 30px;

  font-family: "Pretendard-Bold" !important;
`;

export const CertificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 16px;
  color: ${RollingPalette.unEmphasize.Dark};
  margin-bottom: 53px;
  row-gap: 0.8rem;

  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`;

export const QuestionContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 300px;
  background-color: ${RollingPalette.unEmphasize.Light};
  border-radius: 10px;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: calc(100% - 68px);

  padding-top: 4rem;
`;

export const QuestionText = styled.div`
  font-size: 22px;
  margin-bottom: 40px;
  font-family: "Pretendard-Bold" !important;

  @media screen and (max-width: 630px) {
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: flex-end;
  text-align: center;

  margin-bottom: 76px;
  width: 100%;
`;

export const Teacher = styled.div`
  font-size: 23px;
  font-family: "Pretendard-Bold" !important;
`;

export const Input = styled.input`
  width: 60%;
  height: 60px;

  border: 0;
  background-color: ${RollingPalette.unEmphasize.Base};

  border-radius: 10px;
  outline: none;

  margin-right: 7px;
  text-align: center;
  font-size: 24px;
`;

export const Button = {
  width: "100%",
  height: "68px",

  backgroundColor: `${RollingPalette.main.Base};`,
  border: 0,
  borderRadius: "7px",

  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",

  transition: "0.2s ease-out",
  "&:active": {
    opacity: "0.8",
  },
};
