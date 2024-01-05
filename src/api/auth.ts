import type { SignInFormFieldValues, SignUpFormFieldValues } from "types/auth";
import request from "./request";

export const signIn = async ({ userId, password }: SignInFormFieldValues) => {
  const response = await request({
    url: "/auth/signin",
    method: "post",
    body: {
      userId,
      password,
    },
  });

  return response?.data;
};

export const signUp = async (newUser: SignUpFormFieldValues) => {
  const response = await request({
    method: "post",
    url: "/auth/signup",
    body: newUser,
  });

  return response;
};

export const getMyInfo = async () => {
  const response = await request({
    url: "/users/me",
    method: "get",
  });

  return response;
};
