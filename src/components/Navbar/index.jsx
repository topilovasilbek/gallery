import React from "react";
import { Container, NavbarDiv, NavbarLink } from "./style";
import { useNavigate } from "react-router-dom";
import { toTop } from "../../resources/toTop";

function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    let res = window.confirm("Are you sure?");
    if (res) {
      localStorage.removeItem("user");
      navigate("/signup");
    }
  };

  return (
    <NavbarDiv>
      <Container>
        <NavbarLink to="/home" onClick={toTop}>
          Home
        </NavbarLink>
        <NavbarLink to="/profile" onClick={toTop}>
          Profile
        </NavbarLink>
        <button onClick={handleSignOut}>Sign out</button>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;
