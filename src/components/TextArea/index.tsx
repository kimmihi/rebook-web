import type { InputHTMLAttributes, ForwardedRef } from "react";
import { forwardRef } from "react";

import styled from "styled-components";

import { colors } from "theme";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
  label: string;
  error: boolean;
  helperText?: string;
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const StyledTextArea = styled.textarea<{ $error: boolean }>`
  resize: none;
  width: 100%;
  font-size: 16px;
  padding: 16px 14px;
  border-radius: 8px;
  line-height: 24px;
  margin: 0;
  outline: none;
  border: ${({ $error }) => ($error ? `1px solid ${colors.error.main}` : 0)};
  color: ${colors.primary.main};
  background-color: ${colors.gray[10]};
`;

const HelperText = styled.p`
  color: ${colors.error.light};
  font-size: 14px;
  margin-top: 4px;
`;

const TextArea = (
  { rows, label, error, helperText, ...props }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <Container>
      <StyledTextArea
        rows={rows}
        $error={error}
        aria-label={label}
        ref={ref}
        {...props}
      />
      {error && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default forwardRef(TextArea);
