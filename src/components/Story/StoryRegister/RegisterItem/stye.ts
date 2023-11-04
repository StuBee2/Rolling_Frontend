import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CompanyStoryText = styled.p`
  font-size: 24px;
  font-family: "Pretendard-Bold" !important;

  span {
    color: #4869f6;
    font-family: "Pretendard-Bold" !important;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  background-color: #fff;
  border-radius: 15px;

  border: 1px solid #ddd;
  overflow: hidden;

  padding: 4.5rem 4rem 3rem 4rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const RequireContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const RequireWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  position: relative;
`;

export const InputStyle = {
  width: "100%",
  height: "60px",
  paddingLeft: "20px",
  fontSize: "17px",
  backgroundColor: "rgba(247, 249, 250, 1)",
};

export const ProsConsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const StarGradeContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(247, 249, 250, 1);
  border: 1px solid #bdc2d0;
  border-radius: 5px;
`;

export const TextAreaStyle = {
  width: "100%",
  height: "230px",
  padding: "20px",
  fontSize: "17px",
  backgroundColor: "rgba(247, 249, 250, 1)",
  lineHeight: "25px",
};
