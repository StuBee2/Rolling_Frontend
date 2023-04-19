import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const AbleContainer = styled.div`
  width: 730px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    margin-top: 5px;
  }
`;

export const CompanyName = styled.div`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 730px;
  height: 100px;
  padding-top: 10px;

  overflow: hidden;
  overflow-y: scroll;

  div {
    margin-top: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StarIcon = styled(AiFillStar)`
  color: #ff7f23;
  
`;