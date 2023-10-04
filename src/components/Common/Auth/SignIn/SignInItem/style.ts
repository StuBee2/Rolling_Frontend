import { StopDrag } from "@src/styles/common.style";
import styled from "styled-components";

export const SignInItemForm = styled.form`
  width: 530px;
  height: 630px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  @media screen and (max-height: 730px) {
    padding-top: 3.5rem;
  }
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
  height: 370px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  filter: blur(5px);
  ${StopDrag};

  ul {
    display: flex;
    column-gap: 10px;
    color: #1d1e5a;
    li {
      /* cursor: pointer; */
      &:not(:last-child)::after {
        content: "|";
        margin-left: 10px;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: flex-end;

  button {
    cursor: default;
  }
`;

export const IdPwText = styled.p`
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 5px;
`;

export const InputStyle = {
  width: "100%",
  height: "55px",
  outline: "none",
  borderRadius: "5px",
  color: "rgba(114, 119, 122, 1)",
  border: "1px solid rgba(189, 194, 208, 1)",
  fontSize: "18px",
  paddingLeft: " 20px",
  fontWeight: "350",
  caretColor: "transparent",
};

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
  column-gap: 10px;
  padding: 1rem 2rem;
  /* cursor: pointer; */

  img {
    width: 35px;
    height: 35px;
  }
`;
