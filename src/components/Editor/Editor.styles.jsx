import styled from "styled-components";
import theme from "../../styles/theme";

export const StyledEditor = styled.div`
  .editorWrapper {
    width: 100%;
    border: 1px solid ${theme.color.Grayscale300};
    border-radius: 8px;
  }
  .editorToollbar {
    height: 50px;
    border-radius: 8px 8px 0 0;
    background-color: ${theme.color.Grayscale200};
  }
  .rdw-option-wrapper {
    background-color: ${theme.color.Grayscale200};
  }
  .editor {
    height: 260px;
    padding: 10px;
    margin: 0;
  }
`;
