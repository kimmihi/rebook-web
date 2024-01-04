import type { ReactNode, ForwardedRef, DialogHTMLAttributes } from "react";
import { forwardRef } from "react";

import styled from "styled-components";

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  size?: SizeType;
  children?: ReactNode | ReactNode[];
}

type SizeType = "sm" | "md" | "lg" | "xl";
const SIZE_MAP: { [key in SizeType]: number } = {
  sm: 400,
  md: 600,
  lg: 800,
  xl: 1000,
};

const DialogContainer = styled.dialog<{ size: SizeType }>`
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  z-index: 1000;
  top: 20%;
  width: ${({ size }) => `${SIZE_MAP[size]}px`};
  left: ${({ size }) => `calc(50% + ${SIZE_MAP[size]}px)`};
  transform: ${({ size }) =>
    `translate3d(calc(-50% - ${SIZE_MAP[size]}px), -15%, 0)`};
`;

const Dialog = (
  { size = "sm", children, ...props }: Props,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  return (
    <DialogContainer size={size} ref={ref} {...props}>
      {children}
    </DialogContainer>
  );
};

export default forwardRef(Dialog);
