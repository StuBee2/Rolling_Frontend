import styled from "styled-components";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";

export const ReviewRegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3%;

  .test {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.text<{ isText: boolean }>`
  display: flex;
  font-size: ${(props) => (props.isText ? "18px" : "14px")};
  font-weight: ${(props) => (props.isText ? "" : "bold")};

  margin-top: ${(props) => (props.isText ? "" : "10px")};
  margin-bottom: 5px;

  color: #61677e;
`;

export const Explanation = styled.div<{ isRegister: boolean }>`
  font-size: 13px;
  color: #9a9a9a;

  margin-bottom: ${(props) => (props.isRegister ? "" : "5px")};
`;

export const Input = styled.input.attrs({ required: true })`
  height: 55px;
  width: 600px;

  border-radius: 4px;
  border-color: #c3c3c3;
  border: none;

  box-shadow: 2px 2px 2px #b1b1b1;

  background-color: #4869f6;
  color: white;

  margin: 1% 0 4% 0;
`;

export const ReviewExplanation = styled.div`
  font-size: 13px;
  color: #9a9a9a;
  margin-bottom: "30px";
`;

export const Container = styled.div``;

export const CompanyReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -45%;
`;

export const testtt = styled.div`
  background-color: gray;
`;

export const ReviewBox = styled.div`
  width: 45%;
  height: 900px;

  border-radius: 10px;

  background-color: white;
`;

export const ReviewTitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5%;
`;

export const ReviewTitle = styled.div`
  display: flex;

  color: #1d1e5a;

  font-size: 28px;
  font-weight: bold;

  margin-left: 5%;
`;

export const CloseIcons = styled(AiFillCloseCircle)`
  margin-top: -1%;
  margin-right: 3%;

  color: #1d1e5a;
  font-size: 40px;
`;

export const ReviewButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ReviewButton = styled.button`
  width: 120px;
  height: 40px;

  background-color: #1d1e5a;
  color: white;

  border-radius: 5px;

  box-shadow: 3px 3px 1px 1px #bfc0c0;

  font-weight: bold;

  margin-right: 13%;
`;
