import styled from "styled-components";

export const FormContainer = styled.div`
  width: 650px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dddddd;
  padding: 3rem 0 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 200px;

  @media (max-width: 680px) {
    width: 480px;
  }
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
  background-size: 100% 100%;
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
  height: ${({ isTextArea }) => (isTextArea ? "200px" : "100px")};
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const CompanyAddressInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;

  input {
    width: calc(100% - 85px);
    height: 60px;
    font-size: 16px;
    padding-left: 15px;
    outline: none;
    border: 1px solid rgb(189, 194, 208);
    border-radius: 5px;
    ::placeholder {
      color: rgba(189, 194, 208, 1);
    }
  }
`;

export const SearchButton = styled.div`
  width: 85px;
  height: 60px;

  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: rgba(72, 105, 246, 1);
  font-weight: 600;

  color: #fff;
  cursor: pointer;

  transition: all 0.1s ease-in-out;
  &:active {
    background-color: rgba(72, 105, 246, 0.85);
  }
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
  padding: "15px",
};

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;

  button {
    width: 153px;
    height: 50px;

    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;

    font-weight: 600;
    font-size: 17px;
    border-radius: 7px;
    background-color: rgba(72, 105, 246, 1);

    transition: all 0.1s ease-in-out;
    &:active {
      background-color: rgba(72, 105, 246, 0.85);
    }
  }
`;
