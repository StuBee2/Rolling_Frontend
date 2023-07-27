import styled from "styled-components";

export const LoginBtnCotainer = styled.div`
  width: 75%;
  height: 171px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 65px;

  border-radius: 40px;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px 0 20px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  img {
    width: 29px;
    height: 29px;
  }

  div {
  }
`;
