import type { ButtonHTMLAttributes } from "react";
import type { Color } from "types/theme";

import styled from "styled-components";

import { colors } from "theme";

type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  color?: Color;
}

const SIZE_MAP: { [key in Size]: number } = {
  sm: 16,
  md: 20,
  lg: 24,
};

const StyledButton = styled.button<{ color: Color; size: Size }>`
  position: relative;
  width: ${({ size }) => `${SIZE_MAP[size] * 2}px`};
  height: ${({ size }) => `${SIZE_MAP[size] * 2}px`};
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: ${({ size }) => `${SIZE_MAP[size]}px`};
  color: ${({ color }) => colors[color].main};
  background-color: transparent;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    background-color: ${({ color }) => colors[color].main};
    opacity: 0.1;
  }
`;

const IconButton = ({ size = "md", color = "primary", ...props }: Props) => {
  return <StyledButton size={size} color={color} {...props} />;
};

export default IconButton;
