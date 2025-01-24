import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "../../components/common/Button/Button";

export default function ListPage() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary Button</Button>
      <Button outline>Outline Button</Button>
      <Button secondary>Secondary Button</Button>
    </ThemeProvider>
  );
}
