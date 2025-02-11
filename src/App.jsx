import Routers from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "../src/components/common/Toast/Toast.style";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledToastContainer limit={1} />
      <Routers />
    </ThemeProvider>
  );
}
