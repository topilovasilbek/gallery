import { css, createGlobalStyle } from "styled-components";

export const globalContainer = css`
  @media screen and (max-width: 1250px) {
    width: 94%;
  }

  @media screen and (min-width: 1251px) {
    width: 1230px;
  }
`;

export const GlobalStyles = createGlobalStyle`
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
        background-color: darkBlue;
        border: 2px solid transparent;
    }
    *::selection {
        background: lightblue;
        color: #fff;
        text-shadow: none;
    }
`;
