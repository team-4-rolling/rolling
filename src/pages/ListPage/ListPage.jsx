import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "../../components/common/Button/Button";

export default function ListPage() {
  return (
    <>
      <Button font={theme.font.H1}>Primary Button</Button>
      <Button outline>Outline Button</Button>
      <Button secondary>Secondary Button</Button>
    </>
  );
}
