import styled, { css } from "styled-components";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ebecee;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AbleContainer = styled.div<{ isLoginText: boolean }>`
  width: ${(props) => (props.isLoginText ? "90%" : "100%")};
  height: ${(props) => (props.isLoginText ? "500px" : "100px")};
  ${({ isLoginText }) =>
    isLoginText &&
    css`
      background-color: #ffffff;
      box-shadow: 0px 1px 4px rgba(30, 40, 58, 0.04);
      border-radius: 12px;
    `};
`;

export const Text = styled.div<{ isLogoText?: boolean }>`
  font-size: ${(props) => (props.isLogoText ? "40px" : "20px")};
  font-weight: 700;
  color: ${(props) => props.isLogoText && "#00ba91"};
  margin: ${(props) => !props.isLogoText && "25px 0 0 35px"};
  text-align: ${(props) => props.isLogoText && "center"};
  cursor: ${(props) => props.isLogoText && "pointer"};
`;

export const LoginContainer = styled.form<{ isSocial?: boolean }>`
  width: 100%;
  height: ${(props) => (props.isSocial ? "35%" : "45%")};
  border-bottom: 1px solid #e5e6e9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ isSocial }) =>
    !isSocial &&
    css`
      input {
        width: 80%;
        height: 48px;
        border-radius: 8px;
        outline: none;
        border: none;
        border: 1px solid #e5e6e9;
        padding-left: 10px;
      }

      button {
        width: 80%;
        height: 48px;

        border-radius: 8px;
        outline: none;
        border: none;

        cursor: pointer;
        background-color: #00ba91;
        font-weight: bold;
        color: #ffffff;
      }
    `}
`;

export const LoginBtn = styled.button<{ isGoogle: boolean }>`
  width: 80%;
  height: 48px;

  background-color: ${(props) => !props.isGoogle && "#000000"};
  border: none;
  outline: none;
  border-radius: 8px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 16px;
  font-weight: bold;

  color: ${(props) => !props.isGoogle && "#ffffff"};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SuggestSignUpContainer = styled.div`
  width: 100%;
  height: 11%;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    font-weight: bold;
    color: #00ba91;
  }
`;
