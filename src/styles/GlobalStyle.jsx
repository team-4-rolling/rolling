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
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff2') format('woff2');
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
  font-family: "Pretendard";
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff2') format('woff2');
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
}

  @font-face {
    font-family: 'Handletter';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff2') format('woff2');
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'NanumMyeongjo';
      src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjo.woff2') format('woff2');
      src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjo.woff') format('woff');
      font-display: swap;
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'NanumMyeongjo';
      src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjoBold.woff2') format('woff2');
      src: url('https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjoBold.woff') format('woff');
      font-display: swap;
      font-weight: 700;
      font-style: normal;
  }
`;

export default GlobalStyle;
