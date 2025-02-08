import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    /* class로 적용이 왜 안되는지 의문 */
    --toastify-container-width: 524px;
  }

  /* 실제 모바일에서 확인했을 때, 이유가 있는지 그것이 궁금하다 */
  .Toastify__toast-container--top-center {
    top: 16px;
  }

  * {
      box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }


  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
  font-family: "Pretendard-Bold";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
  font-weight: 700;
  font-style: normal;
}

  @font-face {
    font-family: 'Handletter';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumMyeongjo';
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/NanumMyeongjo.woff') format('woff');
    font-weight:normal;
    font-style: normal;
}
`;

export default GlobalStyle;
