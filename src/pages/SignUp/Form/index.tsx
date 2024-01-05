import type { SignUpFormFieldValues } from "types/auth";

import SignUpFormLogic from "./Logic";

interface Props {
  onSubmit: (formFieldValues: SignUpFormFieldValues) => void;
}

const SignUpForm = ({ onSubmit }: Props) => {
  return <SignUpFormLogic onSubmit={onSubmit} />;
};

export default SignUpForm;
