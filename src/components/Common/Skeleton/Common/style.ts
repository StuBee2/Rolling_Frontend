import styled, { css, keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const SkeletonAnimation = css`
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1s linear infinite;
`;

export const SkeletonBox = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 5px;
  ${SkeletonAnimation}
`;
