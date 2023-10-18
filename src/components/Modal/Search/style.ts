import { StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const SearchModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 322px;
  background-color: rgba(247, 249, 250, 1);
  position: relative;
  display: flex;

  justify-content: center;

  @media screen and (max-width: 1393px) {
    height: 300px;
  }
  @media screen and (max-width: 740px) {
    height: 250px;
  }
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

  display: flex;
  align-items: center;
  column-gap: 10px;
  border-bottom: 3px solid #737b98;
  z-index: 1;
  margin-top: 4rem;

  button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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

    color: #f9fafb;
    color: #737b98;
    font-size: 43px;

    ::placeholder {
      font-weight: bold;
      color: #737b98;
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
