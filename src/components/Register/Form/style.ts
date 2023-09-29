import styled from "styled-components";

export const FormContainer = styled.div`
  width: 650px;
  height: 960px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dddddd;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 200px;
`;

export const FormWrapper = styled.form`
  width: 85%;
  height: 90%;

  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
`;

export const CompanyLogoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const CompanyInfoText = styled.p`
  color: rgba(115, 123, 152, 1);
  font-size: 16px;
  font-weight: 700;
  span {
    color: rgba(236, 106, 94, 1);
  }
`;

export const CompanyLogoImg = styled.div<{ logo: string }>`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background: url(${({ logo }) => logo}) no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid rgb(189, 194, 208);
  background-color: #fff;
  cursor: pointer;
`;

export const CompanyLogoInput = styled.input`
  display: none;
`;

export const InputContainer = styled.div<{ isTextArea?: boolean }>`
  width: 100%;
  height: ${({ isTextArea }) => (isTextArea ? "200px" : "80px")};
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const InputStyle = {
  width: "100%",
  height: "60px",
  fontSize: "16px",
  paddingLeft: "15px",
};

export const TextAreaStyle = {
  width: "100%",
  height: "200px",
  fontSize: "16px",
  padding: "15px 0 0 15px",
};

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: rgba(72, 105, 246, 1);
    width: 153px;
    height: 50px;
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 17px;
    border-radius: 7px;
    transform: scale(1);
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(0.97);
    }
    &:active {
      background-color: #dddddd;
    }
  }
`;
