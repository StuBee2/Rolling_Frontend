import type { CSSProperties } from "react";
import styled, { css } from "styled-components";

interface Props {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  columnGap?: CSSProperties["columnGap"];
  rowGap?: CSSProperties["rowGap"];
  gap?: CSSProperties["gap"];
}

export const Flex = ({
  flexDirection,
  justifyContent,
  alignItems,
  columnGap,
  rowGap,
  gap,
}: Props) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    column-gap: ${columnGap};
    row-gap: ${rowGap};
    gap: ${gap};
  `;
};

export interface BaseFlexProps {
  $gap?: CSSProperties["gap"];
  $columnGap?: CSSProperties["columnGap"];
  $rowGap?: CSSProperties["rowGap"];

  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];

  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];

  $wrap?: CSSProperties["flexWrap"];
  $padding?: CSSProperties["padding"];
  $backgroundColor?: CSSProperties["backgroundColor"];
}

const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;

  gap: ${({ $gap }) => $gap || "0px"};
  row-gap: ${({ $rowGap }) => $rowGap || "0px"};
  column-gap: ${({ $columnGap }) => $columnGap || "0px"};

  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};

  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};

  padding: ${({ $padding }) => $padding};
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;
