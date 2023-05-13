import React from "react";
import { Container, FormGroup, Title } from "./style";
import { getMaxTime } from "../../resources/getMaxTime";
// import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <FormGroup>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            minLength={2}
            maxLength={100}
            pattern="[A-Za-z\s]+"
            title="Please include only letters"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@address.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+998901234567"
            minLength={13}
            maxLength={13}
            pattern="[+][0-9]{12}"
            title="Phone numbers only with Uzbekistan code(+998) are available"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="date">Birth date</label>
          <input
            type="date"
            name="date"
            id="date"
            max={getMaxTime()}
            title="You must be at least 18 years old to sign up"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login"
            minLength={6}
            maxLength={100}
            pattern="[A-Za-z\s]+"
            title="Please include only letters"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Create a password (Min. 8 characters)"
            minLength={8}
            maxLength={30}
            pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Please include at least 1 uppercase letter and 1 number"
            required
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default SignUpComponent;
