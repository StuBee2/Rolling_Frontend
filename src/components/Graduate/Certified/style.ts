import styled from "styled-components";

export const CertificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  min-width: 500px;
  background-color: rgba(222, 224, 230, 1);

  object-fit: fill;

  padding-top: 90px;

  @media screen and (max-width: 498px) {
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    margin-top: 50px;
  }
`;

export const TTest = styled.div``;

export const Test = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
`;

export const Input = styled.input`
  width: 50%;
  height: 60px;

  border: 0;
  background-color: #bdc2d0;

  border-radius: 10px;
  outline: none;

  margin-right: 7px;

  text-align: center;

  font-size: 24px;
`;

export const CertificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: 38px;

  font-size: 30px;
`;

export const CertificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 16px;
  color: #61677e;

  margin-bottom: 53px;

  row-gap: 0.8rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const QuestionContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: #dee0e6;

  border-radius: 10px;
`;

export const QuestionText = styled.div`
  font-size: 22px;

  margin-bottom: 40px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }
`;

export const Button = {
  width: "100%",
  height: "68px",

  backgroundColor: "#4869f6",
  border: 0,
  borderRadius: "7px",

  fontSize: "20px",
  fontWeight: "bold",
  color: "white",

  "&:hover": {
    transition: "0.2s ease-out",
    opacity: "0.8",
  },
};

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: flex-end;
  text-align: center;

  margin-bottom: 76px;

  width: 100%;
`;

export const CertificationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  width: 1220px;
  height: 701px;

  background-color: white;

  @media screen and (max-width: 1250px) {
    width: 180%;
  }

  @media screen and (max-width: 960px) {
    width: 125%;
  }
  @media screen and (max-width: 498px) {
    width: 95%;

    border: 1px solid black;
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 89px;

  width: 90%;
`;

export const Teacher = styled.div`
  font-size: 23px;
`;
