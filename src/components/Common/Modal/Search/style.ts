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
  height: 442px;
  background-color: #1d1e5a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Semicircle = styled.img<{ top: boolean }>`
  position: absolute;
  top: ${(props) => props.top && "0"};
  right: ${(props) => props.top && "0"};
  bottom: ${(props) => !props.top && "0"};
  left: ${(props) => !props.top && "0"};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InputContainer = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 3px solid #737b98;
  height: 157px;
  z-index: 1;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  input {
    width: 80%;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: bold;

    color: #737b98;
    font-size: 60px;
    padding-left: 10px;

    ::placeholder {
      font-weight: bold;
      color: #737b98;
    }
  }

  @media screen and (max-width: 825px) {
    img {
      width: 70px;
      height: 70px;
    }
    input {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 420px) {
    img {
      width: 50px;
      height: 50px;
    }
    input {
      font-size: 24px;
    }
  }
`;
