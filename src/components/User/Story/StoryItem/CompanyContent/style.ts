import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 300px);

  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-family: "Pretendard-Bold" !important;
    font-size: 23px;
  }
`;

export const Content = styled.p`
  width: 100%;
  max-height: 200px;
  overflow-y: hidden;
  overflow-x: hidden;

  font-size: 15px;
  color: rgba(115, 123, 152, 1);

  white-space: pre-wrap;
  padding-left: 5px;
  line-height: 23px;

  &:hover {
    overflow-y: auto;
  }
`;

export const AdvantagesAndDisAdvantages = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  column-gap: 20px;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    column-gap: 0px;
    row-gap: 1.5rem;
  }
`;

export const Advantages = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const AdvantagesContent = styled.p<{ isCons?: boolean }>`
  width: 100%;
  height: auto;

  background-color: ${({ isCons }) => (isCons ? "#eef2fa" : "#fbeeee")};
  border-radius: 10px;

  padding: 1rem;
  color: rgba(115, 123, 152, 1);
  line-height: 23px;
`;

export const Important = styled.p`
  width: 100%;
  height: auto;
  background-color: #eef2fa;
  border-radius: 10px;
  padding: 1rem;
  color: rgba(115, 123, 152, 1);
`;

export const ModifyInput = styled.input`
  width: 60%;
  height: 30px;
  padding-left: 1%;
  outline-color: blue;
`;
