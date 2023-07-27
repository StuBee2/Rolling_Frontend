import styled from "styled-components";

export const Form = styled.form`
  width: 75%;
  height: 322px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #1d1e5a;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const LoginImg = styled.div`
  width: 78px;
  height: 100%;
  background-color: #1d1e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0 0 5px;
`;

export const Input = styled.input`
  width: calc(100% - 78px);
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  padding-left: 15px;
  background-color: rgba(243, 244, 245, 0.5);
  color: #1d1e5a;
  font-size: 17px;

  ::placeholder {
    color: #61677e;
  }
`;

export const SubRole = styled.ul`
  color: #1d1e5a;
  display: flex;
  gap: 5px;
  list-style: none;

  li {
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  width: 130px;
  height: 54px;
  font-size: 18px;
  color: #fff;

  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #1d1e5a;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
