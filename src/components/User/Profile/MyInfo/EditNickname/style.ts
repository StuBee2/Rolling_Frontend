import styled from "styled-components";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";
import { HoverAnimation } from "@src/styles/common.style";

export const AddNickNameForm = styled.form`
  display: flex;
  column-gap: 5px;
  align-items: center;
  input {
    width: 100%;
    height: 25px;
    padding-left: 5px;
    border: 1px solid #4869f6;
    border-radius: 5px;
    outline: none;
    background-color: #f3f4f5;
  }
`;

export const AddNickNameBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const NickName = styled.span<{ isHaveNickName: boolean }>`
  font-weight: bold;
  color: #000;
  font-size: ${({ isHaveNickName }) => (isHaveNickName ? "25px" : "18px")};
`;

export const EditNickNameHoverContainer = styled.div`
  width: 40px;
  height: 40px;
  ${HoverAnimation};
`;

export const EditNickIcon = styled(BsPencilSquare)`
  width: 20px;
  height: 20px;
`;

export const EditAndCancelContainer = styled.div`
  display: flex;
  column-gap: 2px;
  button {
    width: 40px;
    height: 25px;
    cursor: pointer;
    color: #fff;
    background-color: #4869f6;
    outline: none;
    border: none;
    border-radius: 5px;
  }
`;
