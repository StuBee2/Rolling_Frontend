import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${RollingPalette.main.Base};

  border-radius: 10px;
  padding: 1.5rem 1.5rem 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchCompany = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    transform: scaleX(-1);
  }
  p {
    font-size: 20px;
    font-family: "Pretendard-Bold" !important;
    color: #fff;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 52px;
  border-bottom: 3px solid ${RollingPalette.unEmphasize.Base};

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const Input = styled.div<{ isCompanyName: string }>`
  width: 100%;
  height: 100%;

  background-color: transparent;
  outline: none;
  border: none;

  font-size: 28px;
  padding-left: 20px;
  color: ${({ isCompanyName }) =>
    isCompanyName !== "" ? "#fff" : RollingPalette.unEmphasize.Base};

  font-weight: bold;
  display: flex;
  align-items: center;
`;
