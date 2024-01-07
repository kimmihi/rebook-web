import { type InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import styled from "styled-components";

import { colors } from "theme";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  helperText?: string;
}

const Box = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input<{ $error: boolean }>`
  width: 100%;
  height: 48px;
  font-size: 1rem;
  padding: 16px 14px;
  border-radius: 8px;
  line-height: 24px;
  margin: 0;
  outline: none;
  border: ${({ $error }) => ($error ? `1px solid ${colors.error.main}` : 0)};
  color: ${colors.gray[100]};
  background-color: ${colors.gray[20]};
`;

const HelperText = styled.p`
  color: ${colors.error.light};
  font-size: 0.75rem;
  margin-top: 4;
`;

const TextField = (
  { label, error = false, helperText, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Box>
      <Input {...props} aria-label={label} ref={ref} $error={error} />
      {error && helperText && <HelperText>{helperText}</HelperText>}
    </Box>
  );
};

export default forwardRef(TextField);
