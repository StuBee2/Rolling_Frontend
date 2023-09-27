import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const ReviewItemContainer = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  column-gap: 5px;
  @media screen and (max-width: 450px) {
    height: 320px;
  }
`;

export const ReviewItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9fafb;
  border-radius: 15px;
  border: 1px solid #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewItem = styled.div`
  width: 95%;
  height: 88%;
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewCompanyInfoContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const ReviewRegisteredAtAndDelEditContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewRegisteredDate = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #61677e;
`;

export const DelAndEditContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-left: 10px;
  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const SetUpIconContainer = styled.div`
  width: 30px;
  height: 30px;
  ${HoverAnimation};
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
`;

export const ReviewCompanyImgContainer = styled.div`
  width: 100px;
  height: 100px;
  img {
    white-space: nowrap;
    width: 100px;
    height: 100px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
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
