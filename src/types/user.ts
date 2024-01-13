import type { SignUpFormFieldValues } from "./auth";
export interface User
  extends Pick<
    SignUpFormFieldValues,
    "name" | "dateOfBirth" | "email" | "gender" | "userId"
  > {
  id: number;
}
