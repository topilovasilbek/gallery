import React from "react";
import HelmetComponent from "./helmet";
import { Container, Title } from "./style";
import { useNavigate } from "react-router-dom";
import { toTop } from "./../../resources/toTop";
import { ReactComponent as UnAuthorized } from "../../assets/images/401.svg";

function NoPermission(props) {
  const navigate = useNavigate();

  return (
    <>
      <HelmetComponent />
      <Container>
        <UnAuthorized />
        <Title>You have to sign up to access this page!</Title>
        <button
          onClick={() => {
            navigate("/signup");
            toTop();
          }}
        >
          Sign up
        </button>
      </Container>
    </>
  );
}

export default NoPermission;
