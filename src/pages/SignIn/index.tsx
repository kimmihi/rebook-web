import type { SignInFormFieldValues } from "types/auth";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { signIn } from "api/auth";
import { login } from "store/slices/auth";

import { useDispatch } from "store";

import Typography from "components/Typography";

import SignInForm from "./Form";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formFieldValues: SignInFormFieldValues) => {
    try {
      const { accessToken } = await signIn(formFieldValues);
      localStorage.setItem("accessToken", accessToken);
      dispatch(login());
      navigate("/");
    } catch {}
  };

  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: "32px" }}>
        Rebook
      </Typography>
      <SignInForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default SignIn;
