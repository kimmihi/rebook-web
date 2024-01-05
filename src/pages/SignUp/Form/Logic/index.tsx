import type { SignUpFormFieldValues } from "types/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SignUpFormView from "../View";

interface Props {
  onSubmit: (formFieldValues: SignUpFormFieldValues) => void;
}

const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  dateOfBirth: yup
    .string()
    .required("생년월일을 입력해주세요.")
    .matches(/^\d{4}\d{2}\d{2}$/, "YYYYMMDD 형식에 맞게 입력해주세요.")
    .matches(
      /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
      "올바른 생년월일을 입력해주세요."
    ),
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 형식에 맞게 입력해주세요."
    ),
  userId: yup.string().required("사용자 아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  passwordConfirm: yup.string().required("비밀번호를 한 번 더 입력해주세요."),
});

const SignUpFormLogic = ({ onSubmit }: Props) => {
  const form = useForm<Omit<SignUpFormFieldValues, "gender">>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return <SignUpFormView form={form} onSubmit={onSubmit} />;
};

export default SignUpFormLogic;
