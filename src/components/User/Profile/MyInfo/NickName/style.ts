import styled from "styled-components";

export const Form = styled.form<{ isEditing: boolean }>`
  width: 295px;
  height: 55px;

  border-radius: 5px;
  border: ${({ isEditing }) =>
    isEditing ? "2px solid rgba(72, 105, 246, 1)" : "2px solid #c3c9d9"};
  display: flex;
  overflow: hidden;

  transition: all 0.25s ease-in-out;
`;

export const Input = styled.input`
  width: calc(100% - 60px);
  height: 100%;
  border: none;
  outline: none;
  background-color: rgb(243, 244, 245);

  padding-left: 15px;
  font-size: 18px;
  color: #000;
`;

export const SubmitButton = styled.button<{ isEditing: boolean }>`
  width: 60px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ isEditing }) =>
    isEditing ? "rgba(72, 105, 246, 1)" : "#c3c9d9"};
  font-size: 18px;
  color: #fff;
  font-weight: 700;

  transition: all 0.25s ease-in-out;
`;
