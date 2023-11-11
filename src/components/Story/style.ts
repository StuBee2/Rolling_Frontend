import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 20px 0 20px;

  min-width: 830px;

  zoom: 0.8;
`;

export const Wrapper = styled.div<{ rowGap: string }>`
  width: 950px;
  height: 100%;
  padding-top: 4rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => rowGap};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d9d9d9;
`;

export const Title = styled.p`
  font-size: 26px;
  font-family: "Pretendard-Bold" !important;
`;

export const SubTitle = styled.p`
  font-size: 15px;
  color: ${RollingPalette.unEmphasize.Dark};
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const AddText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: rgba(72, 105, 246, 1);
`;

export const InputEmphasizeText = styled.div`
  font-size: 18px;
  font-family: "Pretendard-Bold" !important;
  color: ${RollingPalette.unEmphasize.Dark};

  span {
    color: ${RollingPalette.check.Light};
  }
`;

export const RegistButton = styled.div<{ isRequired: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;

  button {
    width: 153px;
    height: 52px;

    outline: none;
    border: none;
    font-size: 17px;
    font-weight: 800;

    border-radius: 7px;
    cursor: pointer;
    background-color: ${({ isRequired }) =>
      isRequired ? RollingPalette.main.Base : "rgba(72, 105, 246, 0.58)"};
    color: #fff;

    transition: all 0.2s ease-in-out;
    ${({ isRequired }) =>
      isRequired &&
      css`
        transform: scale(1);
        &:active {
          background-color: rgba(72, 105, 246, 0.81);
          transform: scale(0.99);
        }
      `}
  }
`;
