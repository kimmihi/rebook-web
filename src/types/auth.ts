export type Gender = "MALE" | "FEMALE";
export interface SignInFormFieldValues {
  userId: string;
  password: string;
}

export interface SignUpFormFieldValues {
  name: string;
  dateOfBirth: string;
  gender: Gender;
  userId: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
