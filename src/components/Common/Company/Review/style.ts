import styled from "styled-components";

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
export const ReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 2%;
  border-bottom: 1px solid #e3e3e3;

  width: 35%;
  height: 0px;
`;
export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin-top: 3%;
`;

export const Text = styled.text`
  font-size: 14px;
  color: #404040;
`;

export const Input = styled.input.attrs({ required: true })`
  height: 50px;
  margin: 1% 0 4% 0;
  border-radius: 4px;
  border-color: #c3c3c3;
  border: 1px solid #c3c3c3;
  box-shadow: 1px 1px #b1b1b1;
`;

export const ReviewExplanation = styled.div`
  font-size: 13px;
  color: #9a9a9a;
  margin-bottom: "30px";
`;
