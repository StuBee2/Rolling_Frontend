import { HoverAnimation } from "@src/styles/common.style";
import styled, { css } from "styled-components";

export const CompanyNameForm = styled.div`
  width: 665px;
  height: 420px;

  background-color: #f2f4f5;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 5rem 0 3rem 0;
  position: relative;
`;

export const Close = styled.img`
  width: 45px;
  height: 45px;

  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  ${HoverAnimation};
  padding: 5px;
`;

export const Title = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;

  p {
    color: rgba(115, 123, 152, 1);
    font-weight: bold;

    span {
      color: rgba(76, 212, 113, 1);
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 65px;
  background-color: #fff;
  border: 2px solid rgba(189, 194, 208, 1);
  border-radius: 5px;

  overflow: hidden;
  display: flex;
  align-items: center;

  padding-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  outline: none;
  border: none;
  padding-left: 20px;

  font-size: 20px;

  ::placeholder {
    color: rgba(189, 194, 208, 1);
  }
`;

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ConfirmButton = styled.button<{ isActive: boolean }>`
  outline: none;
  border: none;

  width: 100%;
  height: 60px;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(72, 105, 246, 1)" : "rgba(222, 224, 230, 1)"};

  border-radius: 3rem;
  margin-top: 20px;
  font-size: 22px;
  color: #fff;
  cursor: pointer;

  transform: scale(1);
  transition: 0.2s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      &:active {
        transform: scale(0.99);
        background: rgba(72, 105, 246, 0.88);
      }
    `};
`;

export const CompanyListContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 100px;
`;

export const CompanyListUl = styled.ul`
  width: 100%;
  max-height: 250px;

  overflow-x: auto;

  border-radius: 5px;
  border: 1px solid rgba(189, 194, 208, 1);
  background-color: #fff;

  display: flex;
  flex-wrap: wrap;
  font-size: 20px;

  li {
    padding-left: 20px;
    cursor: pointer;
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    &:hover {
      background-color: rgba(242, 244, 245, 1);
    }
  }
`;
