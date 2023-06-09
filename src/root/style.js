import { css, createGlobalStyle } from "styled-components";

export const globalContainer = css`
  @media screen and (max-width: 1250px) {
    width: 94%;
  }

  @media screen and (min-width: 1251px) {
    width: 1230px;
  }
`;

export const globalButton = css`
  padding: 7px 25px;
  min-width: 100px;
  max-width: 150px;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid var(--dark-blue);
  border-radius: 3px;
  color: var(--dark-blue);
  transition: 0.1s linear;

  &:active {
    transform: translateY(1.5px);
  }
`;

export const GlobalStyles = createGlobalStyle`
    :root {
      --light-blue:#43697b;
      --dark-blue:#1F485B;
    }
    /* Universal selector */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* Style HTML */
    html {
        scroll-behavior: smooth;
    }
    /* Style Body */
    body {
        font-family: "Montserrat", sans-serif;
        background-color: #fff;
        color: #1d1d1d;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
    }
    /* Style Scrollbar and Selection */
    ::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 1px 1px 2px rgba(13, 38, 59, 0.75);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--dark-blue);
        border: 2px solid transparent;
    }
    *::selection {
        background: var(--dark-blue);
        color: #fff;
        text-shadow: none;
    }
`;
