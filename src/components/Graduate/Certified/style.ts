import styled from "styled-components";

export const BackGroundImg = styled.img`
  height: 100%;

  background-size: cover;

  position: fixed;
  top: 0;
  left: 0;
`;

export const CertificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  padding-top: 90px;
`;

export const Input = styled.input`
  width: 403px;
  height: 80px;

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
`;

export const Title = styled.div`
  margin-bottom: 38px;

  font-size: 40px;
`;

export const CertificationInfo = styled.div`
  display: flex;
  text-align: center;

  font-size: 18px;
  color: #61677e;

  margin-bottom: 53px;
`;

export const QuestionContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1059px;
  height: 387px;

  background-color: #dee0e6;

  border-radius: 10px;
`;

export const QuestionText = styled.div`
  font-size: 24px;

  margin-bottom: 49px;
`;

export const Button = {
  width: "1059px",
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
  align-items: flex-end;

  margin-bottom: 76px;
`;

export const CertificationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  width: 1200px;
  height: 701px;
  background-color: white;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 89px;
`;

export const Teacher = styled.div`
  display: flex;

  font-size: 23px;
  justify-content: flex-end;
`;
