import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const ReviewModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  padding: 2rem;
  justify-content: center;
  overflow-y: scroll;
`;

export const ReviewModalWrapper = styled.div`
  width: 663px;
  height: 1200px;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 3rem;
  padding: 4rem 15px 0.5rem 15px;
  position: relative;
`;

export const ReviewCloseIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  ${HoverAnimation};
  img {
    width: 30px;
    height: 30px;
  }
`;

export const ReviewCompanyInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }
  p {
    font-size: 25px;
    font-weight: 800;
  }
`;
