import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../services/firebase/useAuth";
import Form from "../Components/LoginForm";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.purple};
`;
const StyledLink = styled(Link)`
  text-align: center;
`;
const StyledForm = styled.form`
  display: block;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

function Login(props) {
  const [serverErrorMessage, setServerErrorMessage] = useState();
  const { signInEmailUser, signInGoogleUser } = useAuth();
  const navigate = useHistory();

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInEmailUser(email, password);
      navigate("/");
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };

  const handleSocialSubmit = async (method) => {
    try {
      if (method === "google") {
        await signInGoogleUser();
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <StyledWrapper>
      <div>
        <StyledHeading>Login With </StyledHeading>
        <Form
          buttonText="LOGIN"
          serverErrorMessage={serverErrorMessage}
          onEmailSubmit={handleEmailSubmit}
          onSocialSubmit={handleSocialSubmit}
        />
        <StyledLink to="/join"> Not a member - Join </StyledLink>
      </div>
    </StyledWrapper>
  );
}

export default Login;
