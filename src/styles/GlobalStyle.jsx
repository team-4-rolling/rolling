import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
}

a{
  text-decoration:none;
}

h1, ul, li {
  margin:0;
}

`;

export default GlobalStyle;
