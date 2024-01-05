import type { UseFormReturn } from "react-hook-form";
import type { SignUpFormFieldValues, Gender } from "types/auth";

import { useState } from "react";

import TextField from "components/TextField";
import Button from "components/Button";

import SelectGender from "./SelectGender";

interface Props {
  form: UseFormReturn<Omit<SignUpFormFieldValues, "gender">>;
  onSubmit: (formFieldValues: SignUpFormFieldValues) => void;
}

const SignUpFormView = ({ form, onSubmit }: Props) => {
  const [gender, setGender] = useState<Gender>("MALE");
  const { formState, register, handleSubmit } = form;

  const handleChangeGender = (newValue: Gender) => {
    setGender(newValue);
  };

  const handleLoclSubmit = (
    formFieldValues: Omit<SignUpFormFieldValues, "gender">
  ) => {
    onSubmit({
      ...formFieldValues,
      gender,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoclSubmit)}
      style={{
        width: "320px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <TextField
        label="이름"
        placeholder="이름"
        error={!!formState.errors.name}
        helperText={formState.errors.name?.message}
        {...register("name")}
      />
      <TextField
        label="생년월일"
        placeholder="생년월일 YYYYMMDD"
        error={!!formState.errors.dateOfBirth}
        helperText={formState.errors.dateOfBirth?.message}
        {...register("dateOfBirth")}
      />
      <SelectGender gender={gender} onChange={handleChangeGender} />
      <TextField
        label="이메일"
        placeholder="이메일"
        error={!!formState.errors.email}
        helperText={formState.errors.email?.message}
        {...register("email")}
      />
      <TextField
        label="사용자 아이디"
        placeholder="사용자 아이디"
        error={!!formState.errors.userId}
        helperText={formState.errors.userId?.message}
        {...register("userId")}
      />
      <TextField
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        error={!!formState.errors.password}
        helperText={formState.errors.password?.message}
        {...register("password")}
      />
      <TextField
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        error={!!formState.errors.passwordConfirm}
        helperText={formState.errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />
      <Button variant="contained" type="submit">
        회원가입
      </Button>
    </form>
  );
};

export default SignUpFormView;
