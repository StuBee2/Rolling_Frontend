import { css } from "styled-components";
import { Flex } from "./flex";

export const HoverAnimation = css`
  ${Flex({ alignItems: "center", justifyContent: "center" })}

  border-radius: 10px;
  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #eeeeee;
    transform: scale(0.98);
  }
  &:active {
    background-color: #dddddd;
  }
`;

export const StopDrag = css`
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const FadeInAnimation = css`
  animation: fadein 0.6s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
