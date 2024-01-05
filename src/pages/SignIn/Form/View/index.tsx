import type { UseFormReturn } from "react-hook-form";
import type { SignInFormFieldValues } from "types/auth";

import TextField from "components/TextField";
import LinkButton from "components/LinkButton";
import Button from "components/Button";

interface Props {
  form: UseFormReturn<SignInFormFieldValues>;
  onSubmit: (formFieldValues: SignInFormFieldValues) => void;
}

const SignInFormVeiw = ({ form, onSubmit }: Props) => {
  const { formState, register, handleSubmit } = form;
  return (
    <form
      style={{
        width: "320px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="아이디"
        placeholder="아이디"
        error={!!formState.errors.userId}
        helperText={formState.errors.userId?.message}
        {...register("userId")}
      />
      <TextField
        type="password"
        label="비밀번호"
        placeholder="비밀번호"
        error={!!formState.errors.password}
        helperText={formState.errors.password?.message}
        {...register("password")}
      />
      <Button type="submit" variant="contained">
        로그인
      </Button>
      <LinkButton
        to="/signup"
        type="button"
        variant="outlined"
        style={{ width: "100%" }}
      >
        회원가입
      </LinkButton>
      <LinkButton to="/" type="button">
        계정을 잊어버리셨나요?
      </LinkButton>
    </form>
  );
};

export default SignInFormVeiw;
