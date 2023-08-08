import styled from "styled-components";

export const SignInItemForm = styled.form`
  width: 515px;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const SubTitle = styled.p`
  font-weight: 350;
  font-size: 20px;
  margin-bottom: 10px;
  color: #1d1e5a;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 35px;
  color: #1d1e5a;
  cursor: pointer;
`;

export const SignInBox = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  position: relative;

  div {
    p {
      font-weight: 500;
      font-size: 25px;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      height: 55px;
      outline: none;
      border-radius: 5px;
      color: rgba(114, 119, 122, 1);
      border: 1px solid rgba(189, 194, 208, 1);
      font-size: 18px;
      padding-left: 20px;
      font-weight: 350;
    }
  }

  ul {
    display: flex;
    column-gap: 10px;
    color: #1d1e5a;
    li {
      cursor: pointer;
    }
  }

  button {
    width: 130px;
    height: 55px;
    background-color: #1d1e5a;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const SocailSignInBtn = styled.button`
  width: 100%;
  height: 75px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  cursor: pointer;

  img {
    width: 35px;
    height: 35px;
  }
`;
