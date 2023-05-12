import React from "react";
import { Container, Title } from "./style";

function SignUpComponent(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default SignUpComponent;
