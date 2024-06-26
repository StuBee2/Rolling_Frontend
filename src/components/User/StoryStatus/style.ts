import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 183px;
  background-color: ${RollingPalette.main.Base};
  border-radius: 10px;
  padding: 0 1.5rem 0 2rem;
  ${Flex({ flexDirection: "column", justifyContent: "center", rowGap: "10px" })}
`;

export const RegistStoryText = styled.div`
  ${Flex({ flexDirection: "column", alignItems: "flex-end", rowGap: "7px" })}

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
  font-size: 22px;
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const WroteStoryCount = styled.p`
  color: #f9fafb;
  font-size: 18px;
  font-weight: bold;
`;

export const StatusText = styled.p`
  color: ${RollingPalette.unEmphasize.Light};
  font-size: 12px;
  margin-top: 10px;
`;

export const StoryButton = styled.button`
  width: 135px;
  height: 52px;

  background-color: ${RollingPalette.main.Dark};
  border-radius: 7px;
  outline: none;
  border: none;

  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  ${Flex({ alignItems: "center", justifyContent: "center", columnGap: "5px" })}

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
