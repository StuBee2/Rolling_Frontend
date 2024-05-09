import { StopDrag } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  zoom: 0.8;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${RollingPalette.unEmphasize.Lightest};
  position: relative;

  ${Flex({ justifyContent: "center" })}

  @media screen and (max-width: 1393px) {
    height: 300px;
  }
  @media screen and (max-width: 740px) {
    height: 250px;
  }

  animation: ${slideInAnimation} 0.3s ease-in-out;
`;

export const Wave = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  ${StopDrag};
`;

export const InputContainer = styled.form`
  width: 80%;
  height: 100px;

  border-bottom: 3px solid ${RollingPalette.unEmphasize.Dark};
  z-index: 1;
  margin-top: 4rem;

  ${Flex({ alignItems: "center", columnGap: "10px" })}

  button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;

    ${Flex({ alignItems: "center", justifyContent: "center" })}

    img {
      width: 70px;
      height: 70px;
    }
  }

  input {
    width: 80%;
    border: none;
    padding-left: 10px;
    outline: none;
    background-color: transparent;
    font-weight: bold;

    color: ${RollingPalette.unEmphasize.Dark};
    font-size: 43px;

    ::placeholder {
      font-weight: bold;
      color: ${RollingPalette.unEmphasize.Dark};
    }
  }

  @media screen and (max-width: 825px) {
    button {
      img {
        width: 70px;
        height: 70px;
      }
    }
    input {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 521px) {
    button {
      img {
        width: 60px;
        height: 60px;
      }
    }
    input {
      font-size: 30px;
    }
  }
`;
