import styled, { css } from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  margin-left: 250px;

  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 7.5rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1005px) {
    width: 100%;
    padding-left: 0;
    margin-left: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Title = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  color: #61677e;
  font-size: 18px;
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
  background-color: rgba(242, 244, 245, 1);
  border: 1px solid #dddddd;
`;

export const StoryContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(242, 244, 245, 1);
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CompanyStoryButtonCotainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 10px 0 0;
  column-gap: 10px;
`;

export const CompanyStoryButton = styled.button`
  width: 165px;
  height: 52px;

  background-color: #1d1e5a;
  border-radius: 7px;
  outline: none;
  border: none;

  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

  img {
    width: 20px;
    height: 20px;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(29, 30, 90, 0.87);
    transform: scale(0.985);
  }
`;

export const CompanyDetailRegistAt = styled.p<{
  widthType: "min-width" | "max-width";
}>`
  color: #737b98;
  font-size: 16px;
  font-weight: 500;
  padding-right: 15px;

  ${({ widthType }) =>
    widthType === "min-width"
      ? css`
          @media screen and (min-width: 580px) {
            display: none;
          }
        `
      : css`
          @media screen and (max-width: 580px) {
            display: none;
          }
        `}
`;
