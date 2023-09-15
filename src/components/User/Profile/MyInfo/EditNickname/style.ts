import styled from "styled-components";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";

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

  @media screen and (max-width: 450px) {
    flex-direction: column;
    row-gap: 5px;
    align-items: normal;
  }
`;

export const AddNickNameBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

export const NickName = styled.span`
  font-weight: bold;
  color: #000;
  font-size: 25px;
`;

export const EditNickIcon = styled(BsPencilSquare)`
  width: 20px;
  height: 20px;
  margin-left: 3px;
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
    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;
