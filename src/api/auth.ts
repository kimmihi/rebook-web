import type { SignInFormFieldValues } from "types/auth";
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

export const getMyInfo = async () => {
  const response = await request({
    url: "/users/me",
    method: "get",
  });

  return response;
};
