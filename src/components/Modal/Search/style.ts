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
  height: 342px;
  background-color: #1d1e5a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1393px) {
    height: 300px;
  }
  @media screen and (max-width: 740px) {
    height: 250px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

export const Semicircle = styled.img<{ top: boolean }>`
  position: absolute;
  top: ${({ top }) => top && "0"};
  right: ${({ top }) => top && "0"};
  bottom: ${({ top }) => !top && "0"};
  left: ${({ top }) => !top && "0"};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InputContainer = styled.form`
  width: 80%;
  height: auto;

  display: flex;
  align-items: center;
  column-gap: 10px;
  border-bottom: 3px solid #737b98;
  z-index: 1;
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
      width: 100px;
      height: 100px;
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
    font-size: 60px;

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

  @media screen and (max-width: 510px) {
    input {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 420px) {
    button {
      img {
        width: 50px;
        height: 50px;
      }
    }
    input {
      font-size: 24px;
    }
  }
`;
