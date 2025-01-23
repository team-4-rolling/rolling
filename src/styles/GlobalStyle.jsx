import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
      box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  @font-face {
  font-family: "Pretendard";
  src: url("./Pretendard-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  }

@font-face {
  font-family: "Pretendard";
  src: url("Pretendard-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  }

`;

export default GlobalStyle;
