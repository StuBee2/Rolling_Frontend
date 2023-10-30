import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 183px;
  background-color: #4869f6;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  padding: 0 1.5rem 0 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegistStoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 7px;

  font-size: 18px;
  color: #fff;

  @media screen and (max-width: 585px) {
    font-size: 15px;
  }
`;

export const IconCotainer = styled.div`
  margin-bottom: 20px;
  img {
    width: 53px;
    height: 53px;
  }
`;

export const StoryNumber = styled.div`
  background-color: #ffffff;
  border-radius: 4rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #4869f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

export const WroteStoryCount = styled.p`
  color: #f9fafb;
  font-size: 18px;
  font-weight: bold;
`;

export const StatusText = styled.p`
  color: #dee0e6;
  font-size: 12px;
  margin-top: 10px;
`;

export const StoryButton = styled.button`
  width: 135px;
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
