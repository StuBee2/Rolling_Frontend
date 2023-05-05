import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
  }
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
