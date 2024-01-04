import type { HTMLAttributes } from "react";
import type { Color } from "types/theme";

import styled from "styled-components";

import { colors } from "theme";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  color?: Color;
}

type Variant = "title" | "sub-title" | "content" | "footer";
type HeadingVariant = Extract<Variant, "title" | "sub-title">;
type ParagraphVariant = Extract<Variant, "content" | "footer">;

const FONT_SIZE_MAP: { [key in Variant]: number } = {
  title: 36,
  "sub-title": 24,
  content: 16,
  footer: 12,
};

const Heading = styled.h1<{ variant: HeadingVariant; color: Color }>`
  font-size: ${({ variant }) => `${FONT_SIZE_MAP[variant]}px`};
  color: ${({ color }) => colors[color].main};
`;

const Paragraph = styled.p<{ variant: ParagraphVariant; color: Color }>`
  font-size: ${({ variant }) => `${FONT_SIZE_MAP[variant]}px`};
  color: ${({ color }) => colors[color].main};
`;

const Typography = ({
  variant = "content",
  color = "primary",
  ...props
}: Props) => {
  if (variant === "title" || variant === "sub-title") {
    return <Heading variant={variant} color={color} {...props} />;
  }
  return <Paragraph variant={variant} color={color} {...props} />;
};

export default Typography;
