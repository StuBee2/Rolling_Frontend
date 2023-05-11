import styled from "styled-components";
import { BiImageAdd } from "react-icons/bi";

export const FirmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
export const FirmTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 2%;
  border-bottom: 1px solid #e3e3e3;
  width: 35%;
  height: 0px;
`;
export const FirmList = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin-top: 3%;
  textarea {
    height: 80px;
    margin: 1% 0 4% 0;
    border-radius: 4px;
    border-color: #c3c3c3;
    border: 1px solid #c3c3c3;
    box-shadow: 1px 1px #b1b1b1;
    resize: none;
    font-size: 15px;
  }
`;

export const Input = styled.input.attrs({ required: true })`
  height: 50px;
  margin: 1% 0 4% 0;
  border-radius: 4px;
  border-color: #c3c3c3;
  border: 1px solid #c3c3c3;
  box-shadow: 1px 1px #b1b1b1;
  font-size: 15px;
`;

export const Text = styled.text`
  font-size: 14px;
  color: #404040;
`;

export const Explanation = styled.div`
  font-size: 13px;
  color: #9a9a9a;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const FileIcon = styled(BiImageAdd)`
  font-size: 50px;
  color: gray;
`;
