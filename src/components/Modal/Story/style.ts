import { HoverAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  padding: 1rem;
  justify-content: center;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  width: 663px;
  height: 2660px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 15px 2rem 15px;
  position: relative;
`;

export const StoryCloseIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
  ${HoverAnimation};
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 35px;
  font-family: "Pretendard-Bold" !important;
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  font-weight: 600;
  color: #6c7072;
`;

export const CompanyLogo = styled.div`
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
    font-weight: 600;
    font-family: "Pretendard-Bold" !important;
  }
`;

export const Wave = styled.img`
  width: 100%:
  height: auto;
  position:absolute;
  bottom: 0;
  left: 0;
`;
