import styled from "styled-components";

export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

export const ReviewInputContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const InputTitle = styled.div`
  display: flex;
  column-gap: 3px;
  p {
    color: #737b98;
    font-size: 17px;
    font-weight: 600;
  }
  span {
    color: #ec6a5e;
  }
`;

export const InputStyle = {
  width: "100%",
  height: "60px",
  padding: "0 10px 0 20px",
  fontSize: "16px",
};

export const CompanySatisfaction = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewTextAreaContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextAreaStyle = {
  width: "100%",
  height: "180px",
  padding: "10px 10px 0 10px",
  fontSize: "16px",
};

export const ReviewButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RegistReviewButton = {
  width: "135px",
  height: "50px",
  fontSize: "17px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "rgba(29, 30, 90, 1)",
  display: "flex",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  columnGap: "5px",
  alignItems: "center",
  justifyContent: "center",
  transform: "scale(1)",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    backgrounColor: "rgba(29, 30, 90, 0.87)",
    transform: "scale(0.985)",
  },
};
