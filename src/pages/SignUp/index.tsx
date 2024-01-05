import type { SignUpFormFieldValues } from "types/auth";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { signUp } from "api/auth";
import Typography from "components/Typography";

import SignUpForm from "./Form";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formFieldValues: SignUpFormFieldValues) => {
    try {
      await signUp(formFieldValues);
      navigate("/signin");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: "32px" }}>
        Rebook
      </Typography>
      <SignUpForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default SignUp;
