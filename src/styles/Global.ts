import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #10403B;
    --bg-secundary: #127369;
    --gray: #BFBFBF;
    --green-sucess: #5CB85C;
    --red-danger: #BA3030;
    --white-emerald: #8AA6A3;
    --white-emerald-light: #D9D9D9;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  body {
    background-color: var(--bg-primary);
  }

  li {
    list-style: none;
  }
`;
