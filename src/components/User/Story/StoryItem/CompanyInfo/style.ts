import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const CompanyLogo = styled.div<{ isHaveSocialId: string }>`
  width: 115px;
  height: 115px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ isHaveSocialId }) => (isHaveSocialId ? "4rem" : "5px")};
    object-fit: cover;
    border: 1px solid #ddd;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 115px);
  height: 115px;
  padding: 0.5rem 0 10px 2rem;
  ${Flex({ flexDirection: "column", justifyContent: "center", rowGap: "20px" })}
`;

export const Title = styled.p`
  font-size: 25px;
  font-family: "Pretendard-Bold" !important;
  cursor: pointer;
`;

export const Info = styled.div`
  ${Flex({ alignItems: "center", columnGap: "5px" })}
  color: ${RollingPalette.main.Dark};

  font-family: "Pretendard-Bold" !important;
  font-weight: 600;
  font-size: 19px;

  p {
    font-family: "Pretendard-Bold" !important;
    font-weight: 600;
    font-size: 18px;
    white-space: nowrap;
  }

  span {
    color: ${RollingPalette.text.Darkest};
    line-height: 25px;
  }
`;

export const PositionContainer = styled.div`
  position: relative;
`;

export const ModifyInput = styled.input`
  width: 100%;
  height: 130%;
  border: 1.5px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  outline-color: blue;
  color: #737b98;
  padding: 5px;
`;

export const PositionListUl = styled.ul`
  width: 100%;

  position: absolute;
  top: 95px;

  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(189, 194, 208, 1);

  color: rgba(29, 30, 90, 1);
  max-height: 300px;
  z-index: 3;
  overflow-y: auto;
  padding: 1rem;

  ${Flex({ flexDirection: "column", rowGap: "20px" })}

  li {
    cursor: pointer;
  }
`;
