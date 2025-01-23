import Routers from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import ThemeProvider from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}
