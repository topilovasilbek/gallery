import React from "react";
import HelmetComponent from "./helmet";
import { Container, Title } from "./style";
import { useNavigate } from "react-router-dom";
import { toTop } from "./../../resources/toTop";
import { ReactComponent as NotFoundSvg } from "../../assets/images/404.svg";

function NotFound(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(localStorage.getItem("user") ? "/" : "/signup");
    toTop();
  };

  return (
    <>
      <HelmetComponent />
      <Container>
        <NotFoundSvg />
        <Title>Page not found!</Title>
        <button onClick={handleClick}>
          {localStorage.getItem("user") ? "Go home" : "Sign up"}
        </button>
      </Container>
    </>
  );
}

export default NotFound;
