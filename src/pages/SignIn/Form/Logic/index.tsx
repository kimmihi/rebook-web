import type { SignInFormFieldValues } from "types/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SignInFormVeiw from "../View";

interface Props {
  onSubmit: (formFieldValues: SignInFormFieldValues) => void;
}

const schema = yup.object({
  userId: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

const SignInFormLogic = ({ onSubmit }: Props) => {
  const form = useForm<SignInFormFieldValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return <SignInFormVeiw form={form} onSubmit={onSubmit} />;
};

export default SignInFormLogic;
