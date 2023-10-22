import styled from "styled-components";
import { StoryStatusCommonHover } from "../style";

export const Container = styled.div`
  width: 100%;
  height: 183px;
  background-color: #4869f6;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;

  ${StoryStatusCommonHover};
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

export const StatusText = styled.div`
  color: #dee0e6;
  font-size: 12px;
  margin-top: 10px;
`;
