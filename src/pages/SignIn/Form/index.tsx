import type { SignInFormFieldValues } from "types/auth";

import SignInFormLogic from "./Logic";

interface Props {
  onSubmit: (formFieldValues: SignInFormFieldValues) => void;
}

const SignInForm = ({ onSubmit }: Props) => {
  return <SignInFormLogic onSubmit={onSubmit} />;
};

export default SignInForm;
