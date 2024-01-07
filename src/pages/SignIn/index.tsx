import type { SignInFormFieldValues } from "types/auth";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { signIn } from "api/auth";

import accessToken from "utils/accessToken";

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
  const navigate = useNavigate();

  const handleSubmit = async (formFieldValues: SignInFormFieldValues) => {
    try {
      const { accessToken: token } = await signIn(formFieldValues);
      accessToken.setToken(token);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
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
