import styled from "styled-components";

export const ReviewItemContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  column-gap: 5px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    height: 390px;
  }
`;

export const ReviewItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background-color: rgba(247, 249, 250, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewItem = styled.div`
  width: 95%;
  height: 88%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0.5rem;
  justify-content: space-between;
  @media screen and (max-width: 495px) {
    padding: 0.5rem;
  }
`;

export const ReviewCompanyInfoContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @media screen and (max-width: 495px) {
    row-gap: 1rem;
    height: auto;
  }
`;

export const ReviewRegisteredDate = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #61677e;
`;

export const ReviewCompanyContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  cursor: pointer;
  overflow-x: scroll;
  overflow-y: hidden;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ReviewCompanyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  ul {
    display: flex;
    column-gap: 10px;
    font-size: 15px;
    white-space: nowrap;

    li {
      span {
        font-weight: bold;
        color: rgb(29, 30, 90);
      }
    }
  }
`;

export const ReviewCompanyName = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 3px;
  white-space: nowrap;
`;

export const ReviewCompanyContent = styled.p`
  color: rgba(115, 123, 152, 1);
  font-size: 15px;
  font-weight: 300;
`;

export const ReviewCompanyCultureContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: rgba(242, 244, 245, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  padding: 2rem;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    p {
      text-align: center;
    }
  }
`;
