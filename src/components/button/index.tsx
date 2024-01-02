import { type ButtonHTMLAttributes } from "react";
import type { Color } from "types/theme";

import styled from "styled-components";

import { colors } from "theme";

type Variant = "text" | "contained" | "outlined";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
}

const BaseButton = styled.button`
  height: 48px;
  display: inline-block;
  padding: 8px 16px;
  border: 0;
  border-radius: 4px;
  outline: none;
  font-weight: 550;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: transparent;
`;

const DisabledButton = styled(BaseButton)`
  color: ${colors.gray.contrastText};
  background-color: ${colors.gray.light};
  cursor: default;
`;

const TextButton = styled(BaseButton)<{ color: Color }>`
  color: ${({ color }) => colors[color].main};
  background-color: transparent;
  &:hover {
    opacity: 0.6;
  }
`;

const ContainedButton = styled(BaseButton)<{ color: Color }>`
  color: #fff;
  background-color: ${({ color }) => colors[color].main};
  &:hover {
    background-color: ${({ color }) => colors[color].light};
  }
`;

const OutlinedButton = styled(BaseButton)<{ color: Color }>`
  color: ${({ color }) => colors[color].main};
  border: 1px solid ${({ color }) => colors[color].main};
`;

const Button = ({ variant = "text", color = "primary", ...props }: Props) => {
  const { disabled } = props;

  if (disabled) {
    return <DisabledButton {...props} />;
  }

  if (variant === "text") {
    return <TextButton color={color} {...props} />;
  }

  if (variant === "contained") {
    return <ContainedButton color={color} {...props} />;
  }

  return <OutlinedButton color={color} {...props} />;
};

export default Button;
