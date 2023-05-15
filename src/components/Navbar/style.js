import styled from "styled-components";
import { globalButton, globalContainer } from "./../../root/style";
import { NavLink } from "react-router-dom";

export const NavbarDiv = styled.div`
  background-color: var(--dark-blue);
  padding-block: 15px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  button {
    ${globalButton};
    margin: 0;
    border-color: #fff;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    gap: 30px;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  transition: 0.2s linear;

  &.active {
    text-decoration: underline;
  }
`;
