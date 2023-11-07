import { HoverAnimation, StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10px 0 10px;
`;

export const Wrapper = styled.div`
  width: 830px;
  height: 610px;

  background-color: #fff;
  border-radius: 7px;
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;

  padding-top: 6rem;

  animation: fadein 0.6s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 885px) {
    width: 630px;
    height: 550px;
  }
  @media screen and (max-height: 690px) {
    height: 500px;
  }
`;

export const Close = styled.img`
  width: 45px;
  height: 45px;

  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
  padding: 5px;

  ${HoverAnimation};
`;

export const Wave = styled.img`
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 0;
  left: 0;

  ${StopDrag};
`;

export const Start = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

export const Explain = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #6c7072;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;

  margin-top: 0.5rem;
`;

export const SignInButton = styled.button`
  width: 280px;
  height: 65px;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px 0 20px;
  border: none;
  outline: none;

  cursor: pointer;
  background-color: #000;
  border-radius: 10px;
  margin-top: 5px;

  img {
    width: 32px;
    height: 32px;
  }
  p {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(32, 35, 37, 1);
  }
  &:active {
    transform: scale(0.985);
  }
`;
