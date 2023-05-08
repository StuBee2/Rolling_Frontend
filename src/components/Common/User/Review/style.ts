import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const AbleContainer = styled.div`
  width: 730px;
  height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    margin-top: 5px;
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
`;

export const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4rem;
`;

export const CompanyName = styled.div`
  line-height: 50px;
  margin-left: 10px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 730px;
  height: 55%;

  overflow: hidden;
  overflow-y: scroll;

  div {
    margin-top: 10px;
  }
`;

export const StarIcon = styled(AiFillStar)`
  color: #ff7f23;
`;
